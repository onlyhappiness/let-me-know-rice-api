import { Module } from '@nestjs/common';
import { UploadService } from './service/upload.service';
import { UploadController } from './controller/upload.controller';

@Module({
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
