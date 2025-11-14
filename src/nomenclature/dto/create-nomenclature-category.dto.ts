import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateNomenclatureCategoryDto {
    @IsString({ message: 'Название категории номенклатуры должно быть строкой' })
    @IsNotEmpty({ message: 'Название категории номенклатуры не может быть пустым' })
    @MinLength(2, { message: 'Название категории номенклатуры должно содержать не менее 2 символов' })
    @MaxLength(255, { message: 'Название категории номенклатуры не должно превышать 255 символов' })
    name: string;
}

