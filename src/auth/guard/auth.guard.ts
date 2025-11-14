import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { JwtAuthService } from '../jwt/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(
        private readonly userService: UserService,
        private readonly jwtAuthService: JwtAuthService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        // Приоритет 1: Проверяем JWT токен (для мобильного приложения)
        const authHeader = request.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.substring(7);
            try {
                const payload = this.jwtAuthService.verifyAccessToken(token);
                const user = await this.userService.findById(payload.userId);
                
                if (!user) {
                    throw new UnauthorizedException('Пользователь не найден.');
                }

                // Сохраняем пользователя и данные из JWT в request
                request.user = user;
                request.jwtPayload = payload;
                
                return true; // ✅ Авторизован через JWT
            } catch (error) {
                // Если JWT невалиден, пробуем cookie-сессию
                // Не выбрасываем ошибку сразу
            }
        }

        // Приоритет 2: Проверяем cookie-сессию (для веб-сайта)
        if (typeof request.session?.userId !== 'undefined') {
            const user = await this.userService.findById(request.session.userId);
            
            if (!user) {
                throw new UnauthorizedException('Пользователь не найден.');
            }

            request.user = user;
            return true; // ✅ Авторизован через сессию
        }

        // ❌ Не авторизован ни одним методом
        throw new UnauthorizedException('Пользователь не авторизирован. Войдите в систему, чтобы получить доступ.');
    }
}