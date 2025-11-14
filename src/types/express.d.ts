import { Organization_Users } from '@prisma/client';
import { JwtPayload } from '@/auth/jwt/jwt.service';

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
                email: string;
                role: string;
                [key: string]: unknown;
            };
            organizationUser?: Organization_Users;
            jwtPayload?: JwtPayload; // Данные из JWT токена
        }
    }
}

export {};

