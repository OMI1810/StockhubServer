import { IsNotEmpty, IsString } from 'class-validator';

export class BindWarehouseDto {
    @IsString({ message: 'Токен QR-кода должен быть строкой' })
    @IsNotEmpty({ message: 'Токен QR-кода не может быть пустым' })
    qrToken: string;
}

