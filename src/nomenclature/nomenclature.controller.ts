import { Body, Controller, HttpCode, HttpStatus, Post, Get, Param, Query, Req } from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { CreateNomenclatureCategoryDto } from './dto/create-nomenclature-category.dto';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { Request } from 'express';

@Controller('nomenclature')
export class NomenclatureController {
    constructor(private readonly nomenclatureService: NomenclatureService) {}

    // Создание категории номенклатуры (для администратора)
    @OrganizationAuthorization(OrganizationRole.ADMIN)
    @Post('categories')
    @HttpCode(HttpStatus.CREATED)
    public async createCategory(
        @Req() req: Request,
        @Authorized('userId') userId: string,
        @Body() dto: CreateNomenclatureCategoryDto,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.createCategory(organizationId, dto);
    }

    // Создание номенклатуры (для администратора)
    @OrganizationAuthorization(OrganizationRole.ADMIN)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async createNomenclature(
        @Req() req: Request,
        @Authorized('userId') userId: string,
        @Body() dto: CreateNomenclatureDto,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.createNomenclature(organizationId, dto);
    }

    // Получение всех номенклатур организации (с опциональной фильтрацией по categoryId)
    @OrganizationAuthorization()
    @Get()
    @HttpCode(HttpStatus.OK)
    public async findAllNomenclatures(
        @Req() req: Request,
        @Query('categoryId') categoryId: string | undefined,
        @Authorized('userId') userId: string,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.findAllNomenclatures(organizationId, categoryId);
    }

    // Получение всех категорий номенклатуры организации
    @OrganizationAuthorization()
    @Get('categories')
    @HttpCode(HttpStatus.OK)
    public async findAllCategories(
        @Req() req: Request,
        @Authorized('userId') userId: string,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.findAllCategories(organizationId);
    }

    // Получение категории по ID
    @OrganizationAuthorization()
    @Get('categories/:id')
    @HttpCode(HttpStatus.OK)
    public async findCategoryById(
        @Req() req: Request,
        @Param('id') categoryId: string,
        @Authorized('userId') userId: string,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.findCategoryById(organizationId, categoryId);
    }

    // Получение номенклатуры по ID
    @OrganizationAuthorization()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    public async findNomenclatureById(
        @Req() req: Request,
        @Param('id') nomenclatureId: string,
        @Authorized('userId') userId: string,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.nomenclatureService.findNomenclatureById(organizationId, nomenclatureId);
    }
}

