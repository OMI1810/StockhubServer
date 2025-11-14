import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { randomUUID } from 'crypto';
import IORedis from 'ioredis';

export interface JwtPayload {
    userId: string;
    email: string;
    role: string;
    currentOrganizationId?: string;
}

export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

@Injectable()
export class JwtAuthService {
    private readonly redis: IORedis;
    private readonly accessTokenExpiresIn: number;
    private readonly refreshTokenExpiresIn: number;

    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {
        const redisUrl = this.configService.get<string>('REDIS_URL') ||
            `redis://:${this.configService.getOrThrow<string>('REDIS_PASSWORD')}@${this.configService.getOrThrow<string>('REDIS_HOST')}:${this.configService.getOrThrow<number>('REDIS_PORT')}`;

        this.redis = new IORedis(redisUrl);

        // Access Token живет 15 минут
        this.accessTokenExpiresIn = 15 * 60; // 900 секунд
        // Refresh Token живет 30 дней
        this.refreshTokenExpiresIn = 30 * 24 * 60 * 60; // 2592000 секунд
    }

    /**
     * Генерирует пару токенов (Access Token + Refresh Token)
     */
    public async generateTokenPair(user: User, currentOrganizationId?: string): Promise<TokenPair> {
        const payload: JwtPayload = {
            userId: user.userId,
            email: user.email,
            role: user.role,
            currentOrganizationId,
        };

        // Генерируем Access Token (JWT)
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: this.accessTokenExpiresIn,
        });

        // Генерируем Refresh Token (UUID)
        const refreshToken = randomUUID();

        // Сохраняем Refresh Token в Redis
        const refreshTokenKey = `refresh_token:${refreshToken}`;
        await this.redis.set(
            refreshTokenKey,
            JSON.stringify({
                userId: user.userId,
                expiresAt: new Date(Date.now() + this.refreshTokenExpiresIn * 1000).toISOString(),
            }),
            'EX',
            this.refreshTokenExpiresIn,
        );

        return {
            accessToken,
            refreshToken,
            expiresIn: this.accessTokenExpiresIn,
        };
    }

    /**
     * Обновляет Access Token используя Refresh Token
     * Возвращает userId из refresh token для дальнейшей обработки в AuthService
     */
    public async validateRefreshTokenForRefresh(refreshToken: string): Promise<{ userId: string }> {
        const refreshTokenKey = `refresh_token:${refreshToken}`;
        const refreshTokenData = await this.redis.get(refreshTokenKey);

        if (!refreshTokenData) {
            throw new UnauthorizedException('Refresh token невалиден или истек. Пожалуйста, войдите снова.');
        }

        return JSON.parse(refreshTokenData);
    }

    /**
     * Генерирует новый Access Token для пользователя
     */
    public generateAccessToken(user: User, currentOrganizationId?: string): string {
        const payload: JwtPayload = {
            userId: user.userId,
            email: user.email,
            role: user.role,
            currentOrganizationId,
        };

        return this.jwtService.sign(payload, {
            expiresIn: this.accessTokenExpiresIn,
        });
    }

    /**
     * Проверяет и декодирует Access Token
     */
    public verifyAccessToken(token: string): JwtPayload {
        try {
            return this.jwtService.verify<JwtPayload>(token);
        } catch (error) {
            throw new UnauthorizedException('Access token невалиден или истек.');
        }
    }

    /**
     * Удаляет Refresh Token из Redis
     */
    public async revokeRefreshToken(refreshToken: string): Promise<void> {
        const refreshTokenKey = `refresh_token:${refreshToken}`;
        await this.redis.del(refreshTokenKey);
    }

    /**
     * Проверяет существование Refresh Token
     */
    public async validateRefreshToken(refreshToken: string): Promise<{ userId: string } | null> {
        const refreshTokenKey = `refresh_token:${refreshToken}`;
        const refreshTokenData = await this.redis.get(refreshTokenKey);

        if (!refreshTokenData) {
            return null;
        }

        return JSON.parse(refreshTokenData);
    }
}

