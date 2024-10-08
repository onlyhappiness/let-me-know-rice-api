import { PickType } from '@nestjs/swagger';
import { Store } from '../domain/entity/store.entity';

export class CreateStoreDTO extends PickType(Store, [
  'name',
  'address',
  'latitude',
  'longitude',
] as const) {}
