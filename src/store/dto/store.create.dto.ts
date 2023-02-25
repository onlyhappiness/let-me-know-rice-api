import { PickType } from '@nestjs/swagger';
import { extend } from 'joi';
import { StoreEntity } from '../model/store.entity';

export class CreateStoreDTO extends PickType(StoreEntity, [
  'name',
  'category',
  'address',
  'phone',
] as const) {}
