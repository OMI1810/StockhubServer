import { IsNotEmpty, IsUUID } from 'class-validator';

export class AddProductToDocumentDto {
    @IsUUID('4', { message: 'ID товара должен быть валидным UUID' })
    @IsNotEmpty({ message: 'ID товара не может быть пустым' })
    productId: string;

    @IsNotEmpty({ message: 'Ожидаемое количество не может быть пустым' })
    quantityExpected: number;
}

