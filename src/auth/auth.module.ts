import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '@/user/user.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { OrganizationRoleGuard } from './guard/organization-role.guard';
import { JwtAuthModule } from './jwt/jwt.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => EmailConfirmationModule),
    JwtAuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, RolesGuard, OrganizationRoleGuard],
  exports: [AuthService, AuthGuard, RolesGuard, OrganizationRoleGuard, JwtAuthModule],
})
export class AuthModule {}
