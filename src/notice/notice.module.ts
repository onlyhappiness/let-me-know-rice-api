import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { NoticeController } from './controller/notice.controller';
import { Notice } from './model/notice.entity';
import { NoticeService } from './service/notice.service';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Notice]), AuthModule, UploadModule],
  providers: [NoticeService],
  controllers: [NoticeController],
  exports: [NoticeService, NoticeModule],
})
export class NoticeModule {}
