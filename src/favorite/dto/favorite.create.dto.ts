import { PickType } from '@nestjs/swagger';
import { Favorite } from '../model/favorite.entity';

export class CreateFavoriteDTO extends PickType(Favorite, [
  'User',
  'Store',
] as const) {}
