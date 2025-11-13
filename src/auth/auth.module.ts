import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';

@Module({
  imports: [UserModule, forwardRef(() => EmailConfirmationModule)],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
