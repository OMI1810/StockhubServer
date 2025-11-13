import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { RegisterDto } from 'src/auth/dto/register.dto';

@ValidatorConstraint({ name: 'IsPasswordMatching', async: false })

export class IsPasswordMatchingConstraint implements ValidatorConstraintInterface {
    public validate(passwordRepeat: string, args: ValidationArguments) {
        const obj = args.object as RegisterDto;
        return obj.password === passwordRepeat;
    }

    public defaultMessage(validationArguments?: ValidationArguments) {
        return 'Пароли не совпали'
    }
}