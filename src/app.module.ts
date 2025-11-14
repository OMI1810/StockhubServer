import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { IS_DEV_ENV } from './libs/common/utils/is-dev.utils';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './libs/mail/mail.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { OrganizationModule } from './organization/organization.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: !IS_DEV_ENV,
      isGlobal: true
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    MailModule,
    EmailConfirmationModule,
    OrganizationModule,
    WarehouseModule,
    NomenclatureModule
  ]
})
export class AppModule {}