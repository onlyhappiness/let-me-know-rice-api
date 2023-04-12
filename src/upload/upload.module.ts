import { Module } from '@nestjs/common';
import { UploadService } from './service/upload.service';
import { UploadController } from './controller/upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './model/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [UploadService],
  controllers: [UploadController],
  exports: [UploadService, UploadModule],
})
export class UploadModule {}
