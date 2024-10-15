import { PartialType, PickType } from '@nestjs/swagger';
import { Store } from '../domain/entity/store.entity';

export class UpdateStoreDTO extends PartialType(
  PickType(Store, ['name', 'address', 'latitude', 'longitude'] as const),
) {}
