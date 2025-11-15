import { Module, forwardRef } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { OrganizationInvitationService } from './organization-invitation.service';
import { OrganizationInvitationController } from './organization-invitation.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { MailModule } from '@/libs/mail/mail.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => UserModule), MailModule, forwardRef(() => AuthModule)],
  controllers: [OrganizationController, OrganizationInvitationController],
  providers: [OrganizationService, OrganizationInvitationService],
})
export class OrganizationModule {}
