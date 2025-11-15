import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Req,
    BadRequestException,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { AddProductToDocumentDto } from './dto/add-product-to-document.dto';
import { ScanBarcodeDto } from './dto/scan-barcode.dto';
import { SubmitScannedItemsDto } from './dto/submit-scanned-items.dto';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { Request } from 'express';

@Controller('documents')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}

    // Создание документа (для администратора)
    @OrganizationAuthorization(OrganizationRole.ADMIN)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async createDocument(
        @Req() req: Request,
        @Authorized('userId') userId: string,
        @Body() dto: CreateDocumentDto,
    ) {
        const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;

        if (!organizationId) {
            throw new BadRequestException(
                'Не выбрана текущая организация. Выберите организацию перед созданием документа.',
            );
        }

        return this.documentService.createDocument(organizationId, userId, dto);
    }

    // Добавление товара в документ (для администратора)
    @OrganizationAuthorization(OrganizationRole.ADMIN)
    @Post(':id/products')
    @HttpCode(HttpStatus.CREATED)
    public async addProductToDocument(
        @Req() req: Request,
        @Param('id') documentId: string,
        @Body() dto: AddProductToDocumentDto,
    ) {
        const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;

        if (!organizationId) {
            throw new BadRequestException(
                'Не выбрана текущая организация. Выберите организацию перед добавлением товара.',
            );
        }

        return this.documentService.addProductToDocument(documentId, organizationId, dto);
    }

    // Получение документа по ID
    @Authorization()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    public async getDocumentById(
        @Req() req: Request,
        @Param('id') documentId: string,
    ) {
        const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;

        if (!organizationId) {
            throw new BadRequestException(
                'Не выбрана текущая организация. Выберите организацию перед получением документа.',
            );
        }

        return this.documentService.getDocumentById(documentId, organizationId);
    }

    // Получение списка документов склада
    @Authorization()
    @Get('warehouse/:warehouseId')
    @HttpCode(HttpStatus.OK)
    public async getDocumentsByWarehouse(
        @Req() req: Request,
        @Param('warehouseId') warehouseId: string,
    ) {
        const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;

        if (!organizationId) {
            throw new BadRequestException(
                'Не выбрана текущая организация. Выберите организацию перед получением документов.',
            );
        }

        return this.documentService.getDocumentsByWarehouse(warehouseId, organizationId);
    }

    // Сканирование штрих-кода (для мобильного приложения)
    @Authorization()
    @Post(':id/scan')
    @HttpCode(HttpStatus.OK)
    public async scanBarcode(
        @Param('id') documentId: string,
        @Authorized('userId') userId: string,
        @Body() dto: ScanBarcodeDto,
    ) {
        return this.documentService.scanBarcode(documentId, userId, dto);
    }

    // Отправка отсканированных товаров на склад (для мобильного приложения)
    @Authorization()
    @Post(':id/submit')
    @HttpCode(HttpStatus.OK)
    public async submitScannedItems(
        @Param('id') documentId: string,
        @Authorized('userId') userId: string,
        @Body() dto: SubmitScannedItemsDto,
    ) {
        return this.documentService.submitScannedItems(documentId, userId, dto);
    }

    // Получение истории сканирований документа
    @Authorization()
    @Get(':id/scan-history')
    @HttpCode(HttpStatus.OK)
    public async getScanHistory(
        @Req() req: Request,
        @Param('id') documentId: string,
    ) {
        const organizationId = req.currentOrganizationId || req.session?.currentOrganizationId;

        if (!organizationId) {
            throw new BadRequestException(
                'Не выбрана текущая организация. Выберите организацию перед получением истории сканирований.',
            );
        }

        return this.documentService.getScanHistory(documentId, organizationId);
    }
}

