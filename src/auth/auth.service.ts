import { Injectable, ConflictException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/__generated__';

@Injectable()
export class AuthService {
    public constructor(private readonly userService: UserService){}

    public async register(dto: RegisterDto){
        const isExists = await this.userService.findByEmail(dto.email);

        if (isExists) {
            throw new ConflictException('Пользователь с таким email уже существует. Пожалуйста, используйте другой email.');
        }

        const newUser = await this.userService.create(
            dto.email,
            dto.passwordHash,
            dto.firstName,
            dto.lastName,
            dto.middleName,
            false, // isVerified
        );

        return this.saveSession(newUser);
    }

    public async login(){}

    public async logout(){}

    private async saveSession(user: User){
        console.log('Session saved for user:', user);
    }
}
