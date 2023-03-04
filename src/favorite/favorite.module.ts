import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from 'src/store/model/store.entity';
import { Users } from 'src/user/model/user.entity';
import { FavoriteController } from './controller/favorite.controller';
import { Favorite } from './model/favorite.entity';
import { FavoriteService } from './service/favorite.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Store, Favorite])],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule {}
