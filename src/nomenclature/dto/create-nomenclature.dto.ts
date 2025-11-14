import { IsNotEmpty, IsString, IsUUID, MinLength, MaxLength } from 'class-validator';

export class CreateNomenclatureDto {
    @IsString({ message: 'ID категории должен быть строкой' })
    @IsUUID('4', { message: 'ID категории должен быть валидным UUID' })
    @IsNotEmpty({ message: 'ID категории не может быть пустым' })
    categoryId: string;

    @IsString({ message: 'Название номенклатуры должно быть строкой' })
    @IsNotEmpty({ message: 'Название номенклатуры не может быть пустым' })
    @MinLength(2, { message: 'Название номенклатуры должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Название номенклатуры не должно превышать 255 символов' })
    name: string;
}

