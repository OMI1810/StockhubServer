import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { WarehouseStatus } from '@prisma/client';
import { randomUUID } from 'crypto';

@Injectable()
export class WarehouseService {
    public constructor(private readonly prisma: PrismaService) {}

    public async create(organizationId: string, dto: CreateWarehouseDto) {
        return this.prisma.warehouses.create({
            data: {
                organizationId,
                name: dto.name,
                address: dto.address,
                city: dto.city,
                state: dto.state,
                zip: dto.zip,
                country: dto.country,
                status: WarehouseStatus.ACTIVE,
            },
        });
    }

    // Генерация QR-кода для склада (токен действителен 24 часа)
    public async generateQrCode(warehouseId: string, organizationId: string) {
        const warehouse = await this.prisma.warehouses.findUnique({
            where: {
                warehouseId,
            },
        });

        if (!warehouse) {
            throw new NotFoundException('Склад не найден. Проверьте правильность указанного ID.');
        }

        if (warehouse.organizationId !== organizationId) {
            throw new ForbiddenException('Склад не принадлежит текущей организации.');
        }

        // Генерируем новый токен
        const qrToken = randomUUID();
        const expiresIn = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 24 часа

        // Обновляем склад с новым токеном
        await this.prisma.warehouses.update({
            where: {
                warehouseId,
            },
            data: {
                qrToken,
                qrTokenExpiresIn: expiresIn,
            },
        });

        return {
            qrToken,
            expiresIn: expiresIn.toISOString(),
            warehouse: {
                warehouseId: warehouse.warehouseId,
                name: warehouse.name,
                organizationId: warehouse.organizationId,
            },
        };
    }

    // Привязка пользователя к складу по QR-коду
    public async bindUserToWarehouse(userId: string, qrToken: string) {
        // Находим склад по токену
        const warehouse = await this.prisma.warehouses.findUnique({
            where: {
                qrToken,
            },
            include: {
                organization: true,
            },
        });

        if (!warehouse) {
            throw new NotFoundException('QR-код не найден или недействителен. Проверьте правильность отсканированного кода.');
        }

        // Проверяем срок действия токена
        if (warehouse.qrTokenExpiresIn && new Date(warehouse.qrTokenExpiresIn) < new Date()) {
            throw new BadRequestException('QR-код истек. Запросите новый QR-код у администратора.');
        }

        // Проверяем, что пользователь является участником организации
        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: warehouse.organizationId,
                    userId,
                },
            },
        });

        if (!organizationUser) {
            throw new ForbiddenException('Вы не являетесь участником организации, к которой принадлежит этот склад.');
        }

        // Обновляем привязку пользователя к складу
        await this.prisma.organization_Users.update({
            where: {
                organizationId_userId: {
                    organizationId: warehouse.organizationId,
                    userId,
                },
            },
            data: {
                warehouseId: warehouse.warehouseId,
            },
        });

        return {
            message: 'Вы успешно привязаны к складу.',
            warehouse: {
                warehouseId: warehouse.warehouseId,
                name: warehouse.name,
                organizationId: warehouse.organizationId,
                organizationName: warehouse.organization.name,
            },
        };
    }
}

