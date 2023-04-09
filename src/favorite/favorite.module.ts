import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { StoreModule } from 'src/store/store.module';
import { FavoriteController } from './controller/favorite.controller';
import { Favorite } from './model/favorite.entity';
import { FavoriteService } from './service/favorite.service';
import { MenuModule } from 'src/menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Favorite]),
    AuthModule,
    StoreModule,
    MenuModule,
  ],
  providers: [FavoriteService],
  controllers: [FavoriteController],
})
export class FavoriteModule {}
