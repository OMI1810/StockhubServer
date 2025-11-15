import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { InviteUserDto } from './dto/invite-user.dto';
import { UserService } from '@/user/user.service';
import { MailService } from '@/libs/mail/mail.service';
import { randomUUID } from 'crypto';
import { OrganizationRole } from '@prisma/client';

@Injectable()
export class OrganizationInvitationService {
    public constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
        private readonly mailService: MailService,
    ) {}

    // Создание приглашения пользователя в организацию
    public async createInvitation(organizationId: string, dto: InviteUserDto) {
        // Проверяем, что пользователь существует
        const user = await this.userService.findByEmail(dto.email);

        if (!user) {
            throw new NotFoundException('Пользователь с указанным email не найден. Пользователь должен быть зарегистрирован в системе.');
        }

        // Проверяем, что пользователь подтвердил email
        if (!user.isVerified) {
            throw new BadRequestException('Пользователь не подтвердил свой email. Пользователь должен подтвердить email перед приглашением в организацию.');
        }

        // Проверяем, что пользователь еще не в организации
        const existingMember = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId,
                    userId: user.userId,
                },
            },
        });

        if (existingMember) {
            throw new ConflictException('Пользователь уже является участником этой организации.');
        }

        // Если указан склад, проверяем, что он принадлежит организации
        if (dto.warehouseId) {
            const warehouse = await this.prisma.warehouses.findUnique({
                where: {
                    warehouseId: dto.warehouseId,
                },
            });

            if (!warehouse) {
                throw new NotFoundException('Склад не найден. Проверьте правильность указанного ID.');
            }

            if (warehouse.organizationId !== organizationId) {
                throw new BadRequestException('Склад не принадлежит текущей организации.');
            }
        }

        // Проверяем, нет ли активного приглашения для этого пользователя
        const existingInvitation = await this.prisma.invitations.findFirst({
            where: {
                organizationId,
                email: dto.email,
                accepted: false,
                expiresIn: {
                    gt: new Date(),
                },
            },
        });

        if (existingInvitation) {
            throw new ConflictException('Активное приглашение для этого пользователя уже существует.');
        }

        // Генерируем токен приглашения
        const token = randomUUID();
        const expiration = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // 7 дней

        // Создаем приглашение
        const invitation = await this.prisma.invitations.create({
            data: {
                organizationId,
                email: dto.email,
                firstName: dto.firstName,
                lastName: dto.lastName,
                middleName: dto.middleName,
                warehouseId: dto.warehouseId || null,
                token,
                expiresIn: expiration,
            },
        });

        // Отправляем письмо с приглашением
        await this.mailService.sendInvitationEmail(
            dto.email,
            dto.firstName,
            invitation.token,
        );

        return {
            message: 'Приглашение успешно отправлено на email пользователя.',
            invitationId: invitation.invitationId,
        };
    }

    // Принятие приглашения пользователем
    public async acceptInvitation(token: string) {
        // Находим приглашение по токену
        const invitation = await this.prisma.invitations.findUnique({
            where: {
                token,
            },
            include: {
                organization: true,
            },
        });

        if (!invitation) {
            throw new NotFoundException('Приглашение не найдено. Проверьте правильность ссылки.');
        }

        // Проверяем, что приглашение не истекло
        if (new Date(invitation.expiresIn) < new Date()) {
            throw new BadRequestException('Приглашение истекло. Запросите новое приглашение.');
        }

        // Проверяем, что приглашение еще не принято
        if (invitation.accepted) {
            throw new BadRequestException('Это приглашение уже было принято.');
        }

        // Находим пользователя по email
        const user = await this.userService.findByEmail(invitation.email);

        if (!user) {
            throw new NotFoundException('Пользователь не найден.');
        }

        // Проверяем, что пользователь еще не в организации
        const existingMember = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: invitation.organizationId,
                    userId: user.userId,
                },
            },
        });

        if (existingMember) {
            // Если пользователь уже в организации, помечаем приглашение как принятое
            await this.prisma.invitations.update({
                where: {
                    invitationId: invitation.invitationId,
                },
                data: {
                    accepted: true,
                },
            });

            throw new ConflictException('Пользователь уже является участником этой организации.');
        }

        // Добавляем пользователя в организацию
        await this.prisma.$transaction(async (tx) => {
            // Создаем запись в Organization_Users
            await tx.organization_Users.create({
                data: {
                    organizationId: invitation.organizationId,
                    userId: user.userId,
                    role: OrganizationRole.WAREHOUSE_WORKER,
                    warehouseId: invitation.warehouseId || null,
                },
            });

            // Обновляем информацию пользователя (firstName, lastName, middleName)
            await tx.user.update({
                where: {
                    userId: user.userId,
                },
                data: {
                    firstName: invitation.firstName,
                    lastName: invitation.lastName,
                    middleName: invitation.middleName,
                },
            });

            // Помечаем приглашение как принятое
            await tx.invitations.update({
                where: {
                    invitationId: invitation.invitationId,
                },
                data: {
                    accepted: true,
                },
            });
        });

        return {
            message: 'Приглашение успешно принято. Вы добавлены в организацию.',
            organization: {
                organizationId: invitation.organization.organizationId,
                name: invitation.organization.name,
            },
        };
    }
}

