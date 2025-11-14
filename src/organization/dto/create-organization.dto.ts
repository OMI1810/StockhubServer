import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateOrganizationDto {
    @IsString({ message: 'Название организации должно быть строкой' })
    @IsNotEmpty({ message: 'Название организации не может быть пустым' })
    @MinLength(2, { message: 'Название организации должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Название организации не должно превышать 255 символов' })
    name: string;
}

