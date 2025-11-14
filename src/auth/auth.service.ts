import { Injectable, ConflictException, InternalServerErrorException, NotFoundException, UnauthorizedException, Inject, forwardRef, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';
import { Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { hash, verify } from 'argon2';
import { Response } from 'express';
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service';
import { JwtAuthService } from './jwt/jwt.service';

@Injectable()
export class AuthService {
    public constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
        @Inject(forwardRef(() => EmailConfirmationService))
        private readonly emailConfirmationService: EmailConfirmationService,
        private readonly jwtAuthService: JwtAuthService,
    ){}

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

        await this.emailConfirmationService.sendVerificationToken(newUser);

        return {
            message: 'Регистрация прошла успешно. На ваш email отправлено письмо для подтверждения.'
        }
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

        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(user);
            throw new UnauthorizedException('Пользователь не подтвержден. Пожалуйста, подтвердите ваш email.');
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

    public async saveSession(req: Request, user: User){
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

    /**
     * Мобильная аутентификация - логин с JWT токенами
     */
    public async mobileLogin(dto: LoginDto) {
        const user = await this.userService.findByEmail(dto.email);

        if (!user) {
            throw new NotFoundException('Пользователь не найден. Проверьте правильность введенных данных.');
        }

        const isPasswordValid = await verify(user.passwordHash, dto.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Неверный пароль. Проверьте правильность введенных данных.');
        }

        if (!user.isVerified) {
            await this.emailConfirmationService.sendVerificationToken(user);
            throw new UnauthorizedException('Пользователь не подтвержден. Пожалуйста, подтвердите ваш email.');
        }

        // Генерируем пару токенов
        const tokenPair = await this.jwtAuthService.generateTokenPair(user);

        return {
            user: {
                userId: user.userId,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                middleName: user.middleName,
                role: user.role,
                isVerified: user.isVerified,
            },
            ...tokenPair,
        };
    }

    /**
     * Обновление Access Token через Refresh Token
     */
    public async refreshToken(refreshToken: string) {
        if (!refreshToken) {
            throw new BadRequestException('Refresh token не предоставлен.');
        }

        // Валидируем refresh token и получаем userId
        const { userId } = await this.jwtAuthService.validateRefreshTokenForRefresh(refreshToken);

        // Загружаем пользователя
        const user = await this.userService.findById(userId);

        // Генерируем новый Access Token
        const accessToken = this.jwtAuthService.generateAccessToken(user);

        return {
            accessToken,
            expiresIn: 900, // 15 минут в секундах
        };
    }

    /**
     * Мобильный выход - удаление Refresh Token
     */
    public async mobileLogout(refreshToken: string): Promise<void> {
        if (!refreshToken) {
            throw new BadRequestException('Refresh token не предоставлен.');
        }

        await this.jwtAuthService.revokeRefreshToken(refreshToken);
    }

    /**
     * Мобильная регистрация - возвращает токены после подтверждения email
     * Пока возвращает только сообщение, токены выдаются после подтверждения
     */
    public async mobileRegister(dto: RegisterDto) {
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

        await this.emailConfirmationService.sendVerificationToken(newUser);

        return {
            message: 'Регистрация прошла успешно. На ваш email отправлено письмо для подтверждения.',
        };
    }
}
