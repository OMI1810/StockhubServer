import { IsArray, IsNotEmpty, IsUUID, ValidateNested, ArrayMinSize, IsEnum, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { DocumentType } from '@prisma/client';

export class DocumentProductDto {
    @IsUUID('4', { message: 'ID товара должен быть валидным UUID' })
    @IsNotEmpty({ message: 'ID товара не может быть пустым' })
    productId: string;

    @IsNotEmpty({ message: 'Ожидаемое количество не может быть пустым' })
    quantityExpected: number;
}

export class CreateDocumentDto {
    @IsUUID('4', { message: 'ID склада должен быть валидным UUID' })
    @IsNotEmpty({ message: 'ID склада не может быть пустым' })
    warehouseId: string;

    @IsEnum(DocumentType, { message: 'Тип документа должен быть INBOUND (приемка) или OUTBOUND (отгрузка)' })
    @IsOptional()
    documentType?: DocumentType;

    @IsArray({ message: 'Товары должны быть массивом' })
    @ArrayMinSize(1, { message: 'Документ должен содержать хотя бы один товар' })
    @ValidateNested({ each: true })
    @Type(() => DocumentProductDto)
    products: DocumentProductDto[];
}

