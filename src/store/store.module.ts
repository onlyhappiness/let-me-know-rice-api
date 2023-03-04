import { Module } from '@nestjs/common';
import { StoreService } from './service/store.service';
import { StoreController } from './controller/store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './model/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService],
  controllers: [StoreController],
  exports: [StoreService, StoreModule],
})
export class StoreModule {}
