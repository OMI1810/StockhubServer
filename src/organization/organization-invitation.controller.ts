import { Body, Controller, HttpCode, HttpStatus, Post, Get, Query, Req, BadRequestException } from '@nestjs/common';
import { OrganizationInvitationService } from './organization-invitation.service';
import { InviteUserDto } from './dto/invite-user.dto';
import { OrganizationAuthorization } from '@/auth/decorators/organization-auth.decorator';
import { OrganizationRole } from '@prisma/client';
import { Authorized } from '@/auth/decorators/authorized.decorator';
import { Request } from 'express';

@Controller('organizations/invitations')
export class OrganizationInvitationController {
    constructor(private readonly invitationService: OrganizationInvitationService) {}

    // Создание приглашения пользователя в организацию (для администратора)
    @OrganizationAuthorization(OrganizationRole.ADMIN)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async createInvitation(
        @Req() req: Request,
        @Authorized('userId') userId: string,
        @Body() dto: InviteUserDto,
    ) {
        // organizationId уже установлен в OrganizationRoleGuard
        const organizationId = req.currentOrganizationId!;
        return this.invitationService.createInvitation(organizationId, dto);
    }

    // Принятие приглашения (публичный эндпоинт, не требует авторизации)
    @Get('accept')
    @HttpCode(HttpStatus.OK)
    public async acceptInvitation(@Query('token') token: string) {
        if (!token) {
            throw new BadRequestException('Токен приглашения не указан.');
        }
        return this.invitationService.acceptInvitation(token);
    }
}

