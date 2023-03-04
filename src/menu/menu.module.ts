import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from 'src/store/store.module';
import { MenuController } from './controller/menu.controller';
import { Menu } from './model/menu.entity';
import { MenuService } from './service/menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), StoreModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
