import { PickType } from '@nestjs/swagger';
import { extend } from 'joi';
import { Store } from '../model/store.entity';

export class CreateStoreDTO extends PickType(Store, [
  'name',
  'address',
  'phone',
  'content',
  'operationHours',
  'closedDays',
] as const) {}
