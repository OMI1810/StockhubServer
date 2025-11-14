import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateWarehouseDto {
    @IsString({ message: 'Название склада должно быть строкой' })
    @IsNotEmpty({ message: 'Название склада не может быть пустым' })
    @MinLength(2, { message: 'Название склада должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Название склада не должно превышать 255 символов' })
    name: string;

    @IsString({ message: 'Адрес должен быть строкой' })
    @IsNotEmpty({ message: 'Адрес не может быть пустым' })
    @MaxLength(255, { message: 'Адрес не должен превышать 255 символов' })
    address: string;

    @IsString({ message: 'Город должен быть строкой' })
    @IsNotEmpty({ message: 'Город не может быть пустым' })
    @MaxLength(255, { message: 'Город не должен превышать 255 символов' })
    city: string;

    @IsString({ message: 'Регион должен быть строкой' })
    @IsNotEmpty({ message: 'Регион не может быть пустым' })
    @MaxLength(255, { message: 'Регион не должен превышать 255 символов' })
    state: string;

    @IsString({ message: 'Почтовый индекс должен быть строкой' })
    @IsNotEmpty({ message: 'Почтовый индекс не может быть пустым' })
    @MaxLength(255, { message: 'Почтовый индекс не должен превышать 255 символов' })
    zip: string;

    @IsString({ message: 'Страна должна быть строкой' })
    @IsNotEmpty({ message: 'Страна не может быть пустой' })
    @MaxLength(255, { message: 'Страна не должна превышать 255 символов' })
    country: string;
}

