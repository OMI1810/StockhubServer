import {IsNotEmpty, IsString} from 'class-validator';

export class ConfirmationDto {
    @IsNotEmpty({ message: 'Токен подтверждения не может быть пустым' })
    @IsString({ message: 'Токен подтверждения должен быть строкой' })
    token: string;
}