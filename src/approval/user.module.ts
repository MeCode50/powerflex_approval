import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
