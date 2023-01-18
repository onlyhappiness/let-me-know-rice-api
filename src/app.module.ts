import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [UserModule, RestaurantModule, MenuModule, FavoriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
