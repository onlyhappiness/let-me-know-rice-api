import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { StoreModule } from 'src/store/store.module';
import { FavoriteController } from './controller/favorite.controller';
import { Favorite } from './model/favorite.entity';
import { FavoriteService } from './service/favorite.service';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite]), AuthModule, StoreModule],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule {}
