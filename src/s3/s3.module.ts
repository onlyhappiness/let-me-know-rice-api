import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Image, ImageSchema } from 'src/image/domain/entity/image.entity';
import { ImageModule } from 'src/image/image.module';
import { S3Service } from './s3.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    ImageModule,
  ],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3Module {}
