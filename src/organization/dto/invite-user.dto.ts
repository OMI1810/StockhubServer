import { IsEmail, IsNotEmpty, IsString, IsUUID, IsOptional, MinLength, MaxLength } from 'class-validator';

export class InviteUserDto {
    @IsEmail({}, { message: 'Email должен быть валидным email адресом' })
    @IsNotEmpty({ message: 'Email не может быть пустым' })
    email: string;

    @IsString({ message: 'Имя должно быть строкой' })
    @IsNotEmpty({ message: 'Имя не может быть пустым' })
    @MinLength(2, { message: 'Имя должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Имя не должно превышать 255 символов' })
    firstName: string;

    @IsString({ message: 'Фамилия должна быть строкой' })
    @IsNotEmpty({ message: 'Фамилия не может быть пустой' })
    @MinLength(2, { message: 'Фамилия должна содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Фамилия не должна превышать 255 символов' })
    lastName: string;

    @IsString({ message: 'Отчество должно быть строкой' })
    @IsNotEmpty({ message: 'Отчество не может быть пустым' })
    @MinLength(2, { message: 'Отчество должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Отчество не должно превышать 255 символов' })
    middleName: string;

    @IsUUID('4', { message: 'ID склада должен быть валидным UUID' })
    @IsOptional()
    warehouseId?: string;
}

