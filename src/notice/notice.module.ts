import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { NoticeController } from './controller/notice.controller';
import { Notice } from './model/notice.entity';
import { NoticeService } from './service/notice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notice]), AuthModule],
  providers: [NoticeService],
  controllers: [NoticeController],
  exports: [NoticeService, NoticeModule],
})
export class NoticeModule {}
