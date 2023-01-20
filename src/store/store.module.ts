import { Module } from '@nestjs/common';
import { StoreController } from './controller/store.controller';
import { StoreService } from './service/store.service';

@Module({
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
