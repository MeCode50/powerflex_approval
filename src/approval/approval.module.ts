import { Module } from '@nestjs/common';
import { UserService } from './approval.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
