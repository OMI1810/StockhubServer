import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { IsPasswordMatchingConstraint } from 'src/libs/common/decorators/is-password-matching-constraint.decorator';

export class RegisterDto {
    @IsString({ message: 'Имя должен быть строкой' })
    @IsNotEmpty({ message: 'Имя не может быть пустым' })
    firstName: string;

    @IsString({ message: 'Фамилия должен быть строкой' })
    @IsNotEmpty({ message: 'Фамилия не может быть пустой' })
    lastName: string;

    @IsString({ message: 'Отчество должен быть строкой' })
    middleName: string;

    @IsString({ message: 'Email должен быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    @IsNotEmpty({ message: 'Email не может быть пустым' })
    email: string;

    @IsString({ message: 'Пароль должен быть строкой' })
    @IsNotEmpty({ message: 'Пароль не может быть пустым' })
    @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
    password: string;

    @IsString({ message: 'Подтверждение пароля должен быть строкой' })
    @IsNotEmpty({ message: 'Подтверждение пароля не может быть пустым' })
    @MinLength(8, { message: 'Подтверждение пароля должен быть не менее 8 символов' })
    @Validate(IsPasswordMatchingConstraint, ['password'], { message: 'Пароли не совпадают' })
    passwordRepeat: string;
}