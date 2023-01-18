import { Module } from '@nestjs/common';
import { RestaurantController } from './controller/restaurant.controller';
import { RestaurantService } from './service/restaurant.service';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
