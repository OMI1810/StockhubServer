import { Injectable, ConflictException, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';
import { Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { hash, verify } from 'argon2';
import { Response } from 'express';

@Injectable()
export class AuthService {
    public constructor(private readonly userService: UserService, private readonly configService: ConfigService){}

    public async register(req: Request, dto: RegisterDto){
        const isExists = await this.userService.findByEmail(dto.email);

        if (isExists) {
            throw new ConflictException('Пользователь с таким email уже существует. Пожалуйста, используйте другой email.');
        }

        const passwordHash = await hash(dto.password);

        const newUser = await this.userService.create(
            dto.email,
            passwordHash,
            dto.firstName,
            dto.lastName,
            dto.middleName,
            false, // isVerified
        );

        return this.saveSession(req, newUser);
    }

    public async login(req: Request, dto: LoginDto){
        const user = await this.userService.findByEmail(dto.email);

        if (!user) {
            throw new NotFoundException('Пользователь не найден. Проверьте правильность введенных данных.');
        }

        const isPasswordValid = await verify(user.passwordHash, dto.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Неверный пароль. Проверьте правильность введенных данных.');
        }

        return this.saveSession(req, user);
    }

    public async logout(req: Request, res: Response): Promise<void>{
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    return reject(new InternalServerErrorException('Не удалось удалить сессию. Возможно, возникла проблемв с сервером или сессия уже была удалена.'));
                }
                res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'))
                resolve();
            });
        });
    }

    private async saveSession(req: Request, user: User){
        return new Promise((resolve, reject) => {
            req.session.userId = user.userId;
            req.session.save((err) => {
                if (err) {
                    return reject(new InternalServerErrorException('Не удалось сохранить сессию. Проверьте, параметр сессии '));
                }
                resolve({user});
            });
        });
    }
}
