import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthService } from './jwt.service';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.getOrThrow<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: '15m', // 15 минут
                },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [JwtAuthService],
    exports: [JwtAuthService],
})
export class JwtAuthModule {}

