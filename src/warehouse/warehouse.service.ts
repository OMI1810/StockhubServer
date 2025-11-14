import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { WarehouseStatus } from '@prisma/client';

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
}

