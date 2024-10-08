import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JoiObject, MongoDBConfig } from './config/database.config';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { S3Module } from './s3/s3.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object(JoiObject),
    }),
    MongooseModule.forRootAsync(MongoDBConfig),
    AuthModule,
    UserModule,
    StoreModule,
    S3Module,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
