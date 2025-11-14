import { CanActivate, ExecutionContext, Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OrganizationRole } from '@prisma/client';
import { ORGANIZATION_ROLES_KEY } from '../decorators/organization-role.decorator';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class OrganizationRoleGuard implements CanActivate {
    public constructor(
        private readonly reflector: Reflector,
        private readonly prisma: PrismaService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<OrganizationRole[]>(
            ORGANIZATION_ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        // Если роли не указаны, все равно проверяем участие в организации
        // (для операций, где нужна только проверка участия, без проверки роли)

        const request = context.switchToHttp().getRequest();
        const userId = request.user?.userId;

        if (!userId) {
            throw new ForbiddenException('Пользователь не авторизован.');
        }

        // Приоритет получения organizationId:
        // 1. Из параметров URL (request.params.organizationId или request.params.id)
        // 2. Из JWT payload (для мобильного приложения)
        // 3. Из сессии (request.session.currentOrganizationId) - для веб-сайта
        // 4. Из body (request.body.organizationId) - опционально
        const organizationId = 
            request.params?.organizationId || 
            request.params?.id || 
            request.jwtPayload?.currentOrganizationId || // Из JWT токена
            request.session?.currentOrganizationId ||
            request.body?.organizationId;

        if (!organizationId) {
            throw new ForbiddenException('Не указан ID организации. Выберите организацию или укажите ID в запросе.');
        }

        const organizationUser = await this.prisma.organization_Users.findUnique({
            where: {
                organizationId_userId: {
                    organizationId,
                    userId,
                },
            },
        });

        if (!organizationUser) {
            throw new NotFoundException('Вы не являетесь участником этой организации.');
        }

        // Проверка роли только если роли указаны
        if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(organizationUser.role)) {
            throw new ForbiddenException('У вас нет доступа к этой операции. Требуемая роль: ' + requiredRoles.join(', '));
        }

        request.organizationUser = organizationUser;

        return true;
    }
}

