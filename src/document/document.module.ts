import { Module, forwardRef } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from '@/user/user.module';

@Module({
    imports: [PrismaModule, forwardRef(() => UserModule), forwardRef(() => AuthModule)],
    controllers: [DocumentController],
    providers: [DocumentService],
    exports: [DocumentService],
})
export class DocumentModule {}

