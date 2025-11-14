import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { OrganizationInvitationService } from './organization-invitation.service';
import { OrganizationInvitationController } from './organization-invitation.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { MailModule } from '@/libs/mail/mail.module';

@Module({
  imports: [PrismaModule, UserModule, MailModule],
  controllers: [OrganizationController, OrganizationInvitationController],
  providers: [OrganizationService, OrganizationInvitationService],
})
export class OrganizationModule {}
