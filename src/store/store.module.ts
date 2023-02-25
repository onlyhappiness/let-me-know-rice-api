import { Module } from '@nestjs/common';
import { StoreService } from './service/store.service';
import { StoreController } from './controller/store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './model/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreEntity])],
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
