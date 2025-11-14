import { applyDecorators, UseGuards } from '@nestjs/common';
import { OrganizationRole } from '@prisma/client';
import { OrganizationRoles } from './organization-role.decorator';
import { AuthGuard } from '../guard/auth.guard';
import { OrganizationRoleGuard } from '../guard/organization-role.guard';

export function OrganizationAuthorization(...roles: OrganizationRole[]) {
    if (roles.length > 0) {
        return applyDecorators(
            OrganizationRoles(...roles),
            UseGuards(AuthGuard, OrganizationRoleGuard),
        );
    }

    return applyDecorators(UseGuards(AuthGuard, OrganizationRoleGuard));
}

