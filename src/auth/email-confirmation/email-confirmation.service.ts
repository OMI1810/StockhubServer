import { forwardRef, Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { TokenType, User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { ConfirmationDto } from './dto/confirmation.dto';
import { MailService } from '@/libs/mail/mail.service';
import { UserService } from '@/user/user.service';
import { AuthService } from '@/auth/auth.service';
import { Request } from 'express';

@Injectable()
export class EmailConfirmationService {
    public constructor(
        private readonly prismaService: PrismaService,
         private readonly mailService: MailService,
         private readonly userService: UserService,
         @Inject(forwardRef(() => AuthService))
         private readonly authService: AuthService
        ) {}

    public async newVerificstion(req: Request, dto: ConfirmationDto){
        const exiestingToken = await this.prismaService.tokens.findUnique({
            where: {
                token: dto.token,
                type: TokenType.VERIFICATION
            }
        });

        if (!exiestingToken) {
            throw new NotFoundException('Токен подтверждения не найден. Пожалуйста, убедитесь что у вас правильный токен.');
        }

        const hasExpired = new Date(exiestingToken.expiresIn) < new Date();

        if (hasExpired) {
            throw new BadRequestException('Токен подтверждения истек. Пожалуйста, запросите новый токен.');
        }

        const existingUser = await this.userService.findByEmail(exiestingToken.email);

        if (!existingUser) {
            throw new NotFoundException('Пользователь не найден. Пожалуйста, убедитесь что у вас правильный email.');
        }

        await this.prismaService.user.update({
            where: { userId: existingUser.userId },
            data: { isVerified: true }
        });

        await this.prismaService.tokens.delete({
            where: { id: exiestingToken.id }
        });

        return this.authService.saveSession(req, existingUser);

    }

    public async sendVerificationToken(user: User) {
        const verificationToken = await this.generateVerificationToken(user.email);

        await this.mailService.sendConfirmationEmail(verificationToken.email, verificationToken.token);

        return true;
    }

    private async generateVerificationToken(email: string) {
        const token = randomUUID();
        const expiration = new Date(new Date().getTime() + 3600 * 1000);
        
        const exiestingToken = await this.prismaService.tokens.findFirst({
            where: {
                email,
                type: TokenType.VERIFICATION
            }
        });

        if (exiestingToken) {
            await this.prismaService.tokens.delete({
                where: { 
                    id: exiestingToken.id
                    //type: TokenType.VERIFICATION
                 }
            });
        }

        const verificationToken = await this.prismaService.tokens.create({
            data: {
                email,
                token,
                expiresIn: expiration,
                type: TokenType.VERIFICATION
            }
        });
        return verificationToken;

    }
}
