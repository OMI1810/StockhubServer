import { Body, Controller, HttpCode, HttpStatus, Post, Get, Delete, Param, Req } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Request } from 'express';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Authorization()
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(@Authorized('userId') userId: string) {
    return this.organizationService.findAllByUserId(userId);
  }

  @Authorization()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Authorized('userId') userId: string,
    @Body() dto: CreateOrganizationDto,
  ) {
    return this.organizationService.create(userId, dto);
  }

  @OrganizationAuthorization(OrganizationRole.ADMIN)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async delete(
    @Param('id') organizationId: string,
    @Authorized('userId') userId: string,
  ) {
    return this.organizationService.delete(organizationId, userId);
  }

  @OrganizationAuthorization()
  @Post(':id/select')
  @HttpCode(HttpStatus.OK)
  public async selectOrganization(
    @Req() req: Request,
    @Param('id') organizationId: string,
    @Authorized('userId') userId: string,
  ) {
    return this.organizationService.selectOrganization(req, organizationId, userId);
  }

  @Authorization()
  @Get('current')
  @HttpCode(HttpStatus.OK)
  public async getCurrentOrganization(
    @Req() req: Request,
    @Authorized('userId') userId: string,
  ) {
    const organization = await this.organizationService.getCurrentOrganization(req, userId);
    
    if (!organization) {
      return { message: 'Текущая организация не выбрана.' };
    }

    return organization;
  }

  @OrganizationAuthorization()
  @Get('stats')
  @HttpCode(HttpStatus.OK)
  public async getStatistics(
    @Req() req: Request,
    @Authorized('userId') userId: string,
  ) {
    // organizationId уже установлен в OrganizationRoleGuard
    const organizationId = req.currentOrganizationId!;
    return this.organizationService.getStatistics(organizationId);
  }
}
