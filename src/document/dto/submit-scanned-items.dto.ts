import { IsArray, IsNotEmpty, IsUUID, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class ScannedItemDto {
    @IsUUID('4', { message: 'ID товара должен быть валидным UUID' })
    @IsNotEmpty({ message: 'ID товара не может быть пустым' })
    productId: string;

    @IsNotEmpty({ message: 'Количество не может быть пустым' })
    quantity: number;
}

export class SubmitScannedItemsDto {
    @IsArray({ message: 'Отсканированные товары должны быть массивом' })
    @ArrayMinSize(1, { message: 'Должен быть отсканирован хотя бы один товар' })
    @ValidateNested({ each: true })
    @Type(() => ScannedItemDto)
    scannedItems: ScannedItemDto[];
}

