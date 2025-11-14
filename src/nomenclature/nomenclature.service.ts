import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateNomenclatureCategoryDto } from './dto/create-nomenclature-category.dto';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';

@Injectable()
export class NomenclatureService {
    public constructor(private readonly prisma: PrismaService) {}

    /**
     * Создание категории номенклатуры для организации
     */
    public async createCategory(organizationId: string, dto: CreateNomenclatureCategoryDto) {
        return this.prisma.nomenclature_Category.create({
            data: {
                organizationId,
                name: dto.name,
            },
        });
    }

    /**
     * Создание номенклатуры в категории
     */
    public async createNomenclature(organizationId: string, dto: CreateNomenclatureDto) {
        // Проверяем, что категория существует и принадлежит организации
        const category = await this.prisma.nomenclature_Category.findUnique({
            where: {
                categoryId: dto.categoryId,
            },
        });

        if (!category) {
            throw new NotFoundException('Категория номенклатуры не найдена. Проверьте правильность указанного ID.');
        }

        if (category.organizationId !== organizationId) {
            throw new BadRequestException('Категория номенклатуры не принадлежит текущей организации.');
        }

        return this.prisma.nomenklatury.create({
            data: {
                organizationId,
                categoryId: dto.categoryId,
                name: dto.name,
            },
        });
    }

    /**
     * Получение всех категорий номенклатуры организации
     */
    public async findAllCategories(organizationId: string) {
        return this.prisma.nomenclature_Category.findMany({
            where: {
                organizationId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    /**
     * Получение всех номенклатур организации
     */
    public async findAllNomenclatures(organizationId: string, categoryId?: string) {
        const where: any = {
            organizationId,
        };

        if (categoryId) {
            // Проверяем, что категория принадлежит организации
            const category = await this.prisma.nomenclature_Category.findUnique({
                where: {
                    categoryId,
                },
            });

            if (!category) {
                throw new NotFoundException('Категория номенклатуры не найдена.');
            }

            if (category.organizationId !== organizationId) {
                throw new BadRequestException('Категория номенклатуры не принадлежит текущей организации.');
            }

            where.categoryId = categoryId;
        }

        return this.prisma.nomenklatury.findMany({
            where,
            include: {
                category: {
                    select: {
                        categoryId: true,
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    /**
     * Получение категории по ID
     */
    public async findCategoryById(organizationId: string, categoryId: string) {
        const category = await this.prisma.nomenclature_Category.findUnique({
            where: {
                categoryId,
            },
        });

        if (!category) {
            throw new NotFoundException('Категория номенклатуры не найдена.');
        }

        if (category.organizationId !== organizationId) {
            throw new BadRequestException('Категория номенклатуры не принадлежит текущей организации.');
        }

        return category;
    }

    /**
     * Получение номенклатуры по ID
     */
    public async findNomenclatureById(organizationId: string, nomenclatureId: string) {
        const nomenclature = await this.prisma.nomenklatury.findUnique({
            where: {
                nomenclatureId,
            },
            include: {
                category: {
                    select: {
                        categoryId: true,
                        name: true,
                    },
                },
            },
        });

        if (!nomenclature) {
            throw new NotFoundException('Номенклатура не найдена.');
        }

        if (nomenclature.organizationId !== organizationId) {
            throw new BadRequestException('Номенклатура не принадлежит текущей организации.');
        }

        return nomenclature;
    }
}

