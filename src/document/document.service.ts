import { Injectable, NotFoundException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { AddProductToDocumentDto } from './dto/add-product-to-document.dto';
import { ScanBarcodeDto } from './dto/scan-barcode.dto';
import { SubmitScannedItemsDto } from './dto/submit-scanned-items.dto';
import { DocumentStatus, DocumentType } from '@prisma/client';

@Injectable()
export class DocumentService {
    constructor(private readonly prisma: PrismaService) {}

    // Создание документа администратором
    public async createDocument(organizationId: string, userId: string, dto: CreateDocumentDto) {
        // Проверяем существование склада и его принадлежность организации
        const warehouse = await this.prisma.warehouses.findUnique({
            where: {
                warehouseId: dto.warehouseId,
            },
        });

        if (!warehouse) {
            throw new NotFoundException('Склад не найден. Проверьте правильность указанного ID.');
        }

        if (warehouse.organizationId !== organizationId) {
            throw new ForbiddenException('Склад не принадлежит текущей организации.');
        }

        // Проверяем существование всех товаров и их принадлежность организации
        const productIds = dto.products.map((p) => p.productId);
        const products = await this.prisma.products.findMany({
            where: {
                productId: { in: productIds },
                organizationId,
            },
        });

        if (products.length !== productIds.length) {
            throw new NotFoundException('Один или несколько товаров не найдены или не принадлежат организации.');
        }

        // Создаем документ с товарами в транзакции
        return this.prisma.$transaction(async (tx) => {
            const document = await tx.documents.create({
                data: {
                    organizationId,
                    warehouseId: dto.warehouseId,
                    documentType: dto.documentType || DocumentType.INBOUND,
                    documentStatus: DocumentStatus.IN_PROGRESS,
                    createdBy: userId,
                },
            });

            // Добавляем товары в документ
            await Promise.all(
                dto.products.map((product) =>
                    tx.documents_Products.create({
                        data: {
                            documentId: document.documentId,
                            productId: product.productId,
                            quantityExpected: product.quantityExpected,
                            quantityActual: 0,
                            quantityChecked: 0,
                        },
                    }),
                ),
            );

            // Возвращаем документ с товарами
            return tx.documents.findUnique({
                where: {
                    documentId: document.documentId,
                },
                include: {
                    products: {
                        include: {
                            product: true,
                        },
                    },
                    warehouse: true,
                    organization: true,
                    creator: {
                        select: {
                            userId: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            middleName: true,
                        },
                    },
                },
            });
        });
    }

    // Добавление товара в документ
    public async addProductToDocument(
        documentId: string,
        organizationId: string,
        dto: AddProductToDocumentDto,
    ) {
        // Проверяем существование документа и его принадлежность организации
        const document = await this.prisma.documents.findUnique({
            where: {
                documentId,
            },
        });

        if (!document) {
            throw new NotFoundException('Документ не найден. Проверьте правильность указанного ID.');
        }

        if (document.organizationId !== organizationId) {
            throw new ForbiddenException('Документ не принадлежит текущей организации.');
        }

        // Проверяем, что документ не закрыт
        if (document.documentStatus === DocumentStatus.COMPLETED || document.documentStatus === DocumentStatus.CANCELLED) {
            throw new BadRequestException('Нельзя добавлять товары в закрытый или отмененный документ.');
        }

        // Проверяем существование товара
        const product = await this.prisma.products.findUnique({
            where: {
                productId: dto.productId,
            },
        });

        if (!product || product.organizationId !== organizationId) {
            throw new NotFoundException('Товар не найден или не принадлежит организации.');
        }

        // Проверяем, не добавлен ли уже товар в документ
        const existingProduct = await this.prisma.documents_Products.findFirst({
            where: {
                documentId,
                productId: dto.productId,
            },
        });

        if (existingProduct) {
            throw new BadRequestException('Товар уже добавлен в документ.');
        }

        // Добавляем товар в документ
        return this.prisma.documents_Products.create({
            data: {
                documentId,
                productId: dto.productId,
                quantityExpected: dto.quantityExpected,
                quantityActual: 0,
                quantityChecked: 0,
            },
            include: {
                product: true,
            },
        });
    }

    // Получение документа по ID
    public async getDocumentById(documentId: string, organizationId: string) {
        const document = await this.prisma.documents.findUnique({
            where: {
                documentId,
            },
            include: {
                products: {
                    include: {
                        product: true,
                    },
                },
                warehouse: true,
                organization: true,
                creator: {
                    select: {
                        userId: true,
                        email: true,
                        firstName: true,
                        lastName: true,
                        middleName: true,
                    },
                },
            },
        });

        if (!document) {
            throw new NotFoundException('Документ не найден. Проверьте правильность указанного ID.');
        }

        if (document.organizationId !== organizationId) {
            throw new ForbiddenException('Документ не принадлежит текущей организации.');
        }

        return document;
    }

    // Получение списка документов склада
    public async getDocumentsByWarehouse(warehouseId: string, organizationId: string) {
        // Проверяем существование склада и его принадлежность организации
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

        return this.prisma.documents.findMany({
            where: {
                warehouseId,
                organizationId,
            },
            include: {
                products: {
                    include: {
                        product: true,
                    },
                },
                warehouse: true,
                creator: {
                    select: {
                        userId: true,
                        email: true,
                        firstName: true,
                        lastName: true,
                        middleName: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    // Сканирование штрих-кода товара из документа (для мобильного приложения)
    public async scanBarcode(documentId: string, userId: string, dto: ScanBarcodeDto) {
        // Проверяем существование документа и загружаем организацию
        const document = await this.prisma.documents.findUnique({
            where: {
                documentId,
            },
            include: {
                organization: true,
            },
        });

        if (!document) {
            throw new NotFoundException('Документ не найден. Проверьте правильность указанного ID.');
        }

        // Проверяем, что пользователь является участником организации
        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: document.organizationId,
                    userId,
                },
            },
        });

        if (!organizationUser) {
            throw new ForbiddenException('Вы не являетесь участником организации, к которой принадлежит этот документ.');
        }

        // Проверяем статус документа
        if (document.documentStatus === DocumentStatus.COMPLETED || document.documentStatus === DocumentStatus.CANCELLED) {
            throw new BadRequestException('Нельзя сканировать товары для закрытого или отмененного документа.');
        }

        // Ищем товар по уникальному штрих-коду
        const product = await this.prisma.products.findUnique({
            where: {
                barcode: dto.barcode,
            },
        });

        if (!product) {
            throw new NotFoundException('Товар с указанным штрих-кодом не найден.');
        }

        // Проверяем, что товар принадлежит организации документа
        if (product.organizationId !== document.organizationId) {
            throw new ForbiddenException('Товар не принадлежит организации документа.');
        }

        // Проверяем, есть ли товар в документе (товар должен быть добавлен в документ администратором)
        const documentProduct = await this.prisma.documents_Products.findFirst({
            where: {
                documentId,
                productId: product.productId,
            },
            include: {
                product: true,
            },
        });

        if (!documentProduct) {
            throw new BadRequestException('Данного товара нет в документах.');
        }

        // Сохраняем событие сканирования в историю (кто, когда, что сканировал)
        await this.prisma.scan_events.create({
            data: {
                documentId,
                productId: product.productId,
                userId,
                quantity: 1,
            },
        });

        return {
            message: 'Товар успешно отсканирован.',
            product: {
                productId: product.productId,
                name: product.name,
                barcode: product.barcode,
                sku: product.sku,
            },
            documentProduct: {
                quantityExpected: documentProduct.quantityExpected,
                quantityActual: documentProduct.quantityActual,
                quantityChecked: documentProduct.quantityChecked,
            },
        };
    }

    // Отправка отсканированных товаров на склад (для INBOUND) или отгрузка со склада (для OUTBOUND)
    public async submitScannedItems(documentId: string, userId: string, dto: SubmitScannedItemsDto) {
        // Проверяем существование документа
        const document = await this.prisma.documents.findUnique({
            where: {
                documentId,
            },
            include: {
                organization: true,
            },
        });

        if (!document) {
            throw new NotFoundException('Документ не найден. Проверьте правильность указанного ID.');
        }

        // Проверяем, что пользователь является участником организации
        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: document.organizationId,
                    userId,
                },
            },
        });

        if (!organizationUser) {
            throw new ForbiddenException('Вы не являетесь участником организации, к которой принадлежит этот документ.');
        }

        // Проверяем статус документа
        if (document.documentStatus === DocumentStatus.COMPLETED || document.documentStatus === DocumentStatus.CANCELLED) {
            throw new BadRequestException('Нельзя отправлять товары для закрытого или отмененного документа.');
        }

        // Проверяем существование всех товаров в документе перед обновлением
        const productIds = dto.scannedItems.map((item) => item.productId);
        const documentProducts = await this.prisma.documents_Products.findMany({
            where: {
                documentId,
                productId: { in: productIds },
            },
            include: {
                product: true,
            },
        });

        if (documentProducts.length !== productIds.length) {
            throw new NotFoundException('Один или несколько товаров не найдены в документе.');
        }

        // Обновляем документ в транзакции
        return this.prisma.$transaction(async (tx) => {
            // Определяем операцию в зависимости от типа документа: INBOUND (приемка) - увеличиваем, OUTBOUND (отгрузка) - уменьшаем
            const isOutbound = document.documentType === DocumentType.OUTBOUND;

            // Обновляем фактическое количество для каждого товара (увеличиваем для приемки, уменьшаем для отгрузки)
            const updatePromises = dto.scannedItems.map((item) =>
                tx.documents_Products.updateMany({
                    where: {
                        documentId,
                        productId: item.productId,
                    },
                    data: {
                        quantityActual: isOutbound
                            ? {
                                  decrement: item.quantity, // Отгрузка: уменьшаем количество
                              }
                            : {
                                  increment: item.quantity, // Приемка: увеличиваем количество
                              },
                        quantityChecked: {
                            increment: item.quantity, // Всегда увеличиваем количество проверенных товаров
                        },
                    },
                }),
            );

            await Promise.all(updatePromises);

            // Сохраняем события сканирования
            const scanEvents = dto.scannedItems.map((item) =>
                tx.scan_events.create({
                    data: {
                        documentId,
                        productId: item.productId,
                        userId,
                        quantity: item.quantity,
                    },
                }),
            );

            await Promise.all(scanEvents);

            // Получаем обновленный документ
            const updatedDocument = await tx.documents.findUnique({
                where: {
                    documentId,
                },
                include: {
                    products: {
                        include: {
                            product: true,
                        },
                    },
                    warehouse: true,
                },
            });

            // Формируем сообщение в зависимости от типа документа
            const message =
                document.documentType === DocumentType.OUTBOUND
                    ? 'Отсканированные товары успешно отгружены со склада.'
                    : 'Отсканированные товары успешно отправлены на склад.';

            return {
                message,
                document: updatedDocument,
            };
        });
    }

    // Получение истории сканирований документа (кто, когда, что сканировал)
    public async getScanHistory(documentId: string, organizationId: string) {
        // Проверяем существование документа и его принадлежность организации
        const document = await this.prisma.documents.findUnique({
            where: {
                documentId,
            },
        });

        if (!document) {
            throw new NotFoundException('Документ не найден. Проверьте правильность указанного ID.');
        }

        if (document.organizationId !== organizationId) {
            throw new ForbiddenException('Документ не принадлежит текущей организации.');
        }

        return this.prisma.scan_events.findMany({
            where: {
                documentId,
            },
            include: {
                product: {
                    select: {
                        productId: true,
                        name: true,
                        barcode: true,
                        sku: true,
                    },
                },
                user: {
                    select: {
                        userId: true,
                        email: true,
                        firstName: true,
                        lastName: true,
                        middleName: true,
                    },
                },
            },
            orderBy: {
                scannedAt: 'desc',
            },
        });
    }
}

