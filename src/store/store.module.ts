import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonService } from 'src/common/common.service';
import { Store, StoreSchema } from './domain/entity/store.entity';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Store.name, useFactory: () => StoreSchema },
    ]),
  ],
  controllers: [StoreController],
  providers: [StoreService, CommonService],
})
export class StoreModule {}
