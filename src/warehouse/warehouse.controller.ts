import { Body, Controller, HttpCode, HttpStatus, Post, Get, Param, Req, BadRequestException } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { BindWarehouseDto } from './dto/bind-warehouse.dto';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { Request } from 'express';

@Controller('warehouses')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @OrganizationAuthorization(OrganizationRole.ADMIN)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Req() req: Request,
    @Authorized('userId') userId: string,
    @Body() dto: CreateWarehouseDto,
  ) {
    const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;
    
    if (!organizationId) {
      throw new BadRequestException('Не выбрана текущая организация. Выберите организацию перед созданием склада.');
    }

    return this.warehouseService.create(organizationId, dto);
  }

  // Генерация QR-кода для склада (для администратора)
  @OrganizationAuthorization(OrganizationRole.ADMIN)
  @Get(':id/qr-code')
  @HttpCode(HttpStatus.OK)
  public async generateQrCode(
    @Req() req: Request,
    @Param('id') warehouseId: string,
    @Authorized('userId') userId: string,
  ) {
    const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;
    
    if (!organizationId) {
      throw new BadRequestException('Не выбрана текущая организация. Выберите организацию перед генерацией QR-кода.');
    }

    return this.warehouseService.generateQrCode(warehouseId, organizationId);
  }

  // Привязка пользователя к складу по QR-коду (для мобильного приложения)
  @Authorization()
  @Post('bind')
  @HttpCode(HttpStatus.OK)
  public async bindWarehouse(
    @Authorized('userId') userId: string,
    @Body() dto: BindWarehouseDto,
  ) {
    return this.warehouseService.bindUserToWarehouse(userId, dto.qrToken);
  }
}

