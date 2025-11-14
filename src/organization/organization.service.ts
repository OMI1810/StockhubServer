import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationRole } from '@prisma/client';
import { Request } from 'express';

@Injectable()
export class OrganizationService {
    public constructor(private readonly prisma: PrismaService) {}

    public async create(userId: string, dto: CreateOrganizationDto) {
        return this.prisma.$transaction(async (tx) => {
            const organization = await tx.organization.create({
                data: {
                    name: dto.name,
                    createdBy: userId,
                },
            });

            await tx.organization_Users.create({
                data: {
                    organizationId: organization.organizationId,
                    userId: userId,
                    role: OrganizationRole.ADMIN,
                },
            });

            return organization;
        });
    }

    public async findAllByUserId(userId: string) {
        const organizationUsers = await this.prisma.organization_Users.findMany({
            where: {
                userId: userId,
            },
            include: {
                organization: true,
            },
        });

        return organizationUsers.map((orgUser) => ({
            organizationId: orgUser.organization.organizationId,
            name: orgUser.organization.name,
            createdBy: orgUser.organization.createdBy,
            createdAt: orgUser.organization.createdAt,
            role: orgUser.role,
        }));
    }

    public async delete(organizationId: string, userId: string) {
        const organization = await this.prisma.organization.findUnique({
            where: { organizationId },
        });

        if (!organization) {
            throw new NotFoundException('Организация не найдена. Проверьте правильность указанного ID.');
        }

        const [warehouses, products] = await Promise.all([
            this.prisma.warehouses.findMany({ 
                where: { 
                    organizationId: organizationId 
                },
                take: 1,
            }),
            this.prisma.products.findMany({ 
                where: { 
                    organizationId: organizationId 
                },
                take: 1,
            }),
        ]);

        if (warehouses.length > 0 || products.length > 0) {
            throw new ConflictException(
                'Невозможно удалить организацию. Сначала удалите все связанные склады и товары.',
            );
        }

        return this.prisma.$transaction(async (tx) => {
            await tx.organization_Users.deleteMany({
                where: { organizationId },
            });

            await tx.organization.delete({
                where: { organizationId },
            });

            return { message: 'Организация успешно удалена.' };
        });
    }

    public async selectOrganization(req: Request, organizationId: string, userId: string) {
        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId,
                    userId,
                },
            },
            include: {
                organization: true,
            },
        });

        if (!organizationUser) {
            throw new NotFoundException('Вы не являетесь участником этой организации.');
        }

        return new Promise((resolve, reject) => {
            req.session.currentOrganizationId = organizationId;
            req.session.save((err) => {
                if (err) {
                    return reject(new BadRequestException('Не удалось сохранить выбранную организацию в сессии.'));
                }
                resolve({
                    message: 'Организация успешно выбрана.',
                    organization: {
                        organizationId: organizationUser.organization.organizationId,
                        name: organizationUser.organization.name,
                        role: organizationUser.role,
                    },
                });
            });
        });
    }

    public async getCurrentOrganization(req: Request, userId: string) {
        const currentOrganizationId = req.session.currentOrganizationId;

        if (!currentOrganizationId) {
            return null;
        }

        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: currentOrganizationId,
                    userId,
                },
            },
            include: {
                organization: true,
            },
        });

        if (!organizationUser) {
            return null;
        }

        return {
            organizationId: organizationUser.organization.organizationId,
            name: organizationUser.organization.name,
            role: organizationUser.role,
        };
    }
}
