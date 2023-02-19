import { Module } from '@nestjs/common';
import { StoreService } from './service/store.service';
import { StoreController } from './controller/store.controller';

@Module({
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
