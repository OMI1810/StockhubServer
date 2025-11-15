import { IsNotEmpty, IsString } from 'class-validator';

export class ScanBarcodeDto {
    @IsString({ message: 'Штрих-код должен быть строкой' })
    @IsNotEmpty({ message: 'Штрих-код не может быть пустым' })
    barcode: string;
}

