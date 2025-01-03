import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//app
import { AppController } from './app.controller';
import { AppService } from './app.service';

//config
import { CustomLoggerService } from 'src/config/logger/logger.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';

//libs
import { CloudinaryModule } from 'src/config/cloudinary/cloudinary.module';
import { SendMailsModule } from 'src/config/email/sendMail.module';

//module
import { UserModule } from 'src/approval/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,

    CloudinaryModule,
    UserModule,
    SendMailsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLoggerService],
})
export class AppModule {}
