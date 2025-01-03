import { Module } from '@nestjs/common';
import { UserService } from './approval.service';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UserController } from './approval.controller';

@Module({
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
