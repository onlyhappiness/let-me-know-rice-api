import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Image, ImageSchema } from './domain/entity/image.entity';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Image.name, useFactory: () => ImageSchema },
    ]),
  ],
  providers: [ImageService],
  controllers: [ImageController],
  exports: [ImageService],
})
export class ImageModule {}
