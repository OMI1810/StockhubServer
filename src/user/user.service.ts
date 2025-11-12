import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    public constructor(private readonly prisma: PrismaService) {}

    public async findById (userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { userId }
        });

        if(!user) {
            throw new NotFoundException('Пользователь не найден. Проверьте введённые данные.');
        }

        return user;
    }

    public async findByEmail (email: string) {
        const user = await this.prisma.user.findUnique({
            where: { email }
        });

        return user;
    }

    public async create (email: string, passwordHash: string, firstName: string, lastName: string, middleName: string, isVerified: boolean) {
        const user = await this.prisma.user.create({
            data: {
                email,
                passwordHash, // Возможно await hash(password)
                firstName,
                lastName,
                middleName,
                isVerified
            }
        });

        return user;
    }
}
