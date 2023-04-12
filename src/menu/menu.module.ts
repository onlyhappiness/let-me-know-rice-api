import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from 'src/store/store.module';
import { MenuController } from './controller/menu.controller';
import { Menu } from './model/menu.entity';
import { MenuService } from './service/menu.service';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), StoreModule, UploadModule],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService, MenuModule],
})
export class MenuModule {}
