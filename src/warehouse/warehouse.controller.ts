import { Body, Controller, HttpCode, HttpStatus, Post, Req, BadRequestException } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Authorized } from '@/auth/decorators/authorized.decorator';
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
    const organizationId = req.session.currentOrganizationId;
    
    if (!organizationId) {
      throw new BadRequestException('Не выбрана текущая организация. Выберите организацию перед созданием склада.');
    }

    return this.warehouseService.create(organizationId, dto);
  }
}

