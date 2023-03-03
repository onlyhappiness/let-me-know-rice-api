import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from './controller/menu.controller';
import { Menu } from './model/menu.entity';
import { MenuService } from './service/menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
