import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import { AuthGuard } from './guard/auth.guard';
import { RolesGuard } from './guard/roles.guard';
import { OrganizationRoleGuard } from './guard/organization-role.guard';
import { JwtAuthModule } from './jwt/jwt.module';

@Module({
  imports: [
    UserModule,
    forwardRef(() => EmailConfirmationModule),
    JwtAuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, RolesGuard, OrganizationRoleGuard],
  exports: [AuthService],
})
export class AuthModule {}
