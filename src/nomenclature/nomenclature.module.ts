import { Module, forwardRef } from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { NomenclatureController } from './nomenclature.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
    imports: [PrismaModule, forwardRef(() => UserModule), forwardRef(() => AuthModule)],
    controllers: [NomenclatureController],
    providers: [NomenclatureService],
    exports: [NomenclatureService],
})
export class NomenclatureModule {}

