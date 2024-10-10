import { PickType } from '@nestjs/swagger';
import { Review } from '../domain/entity/review.entity';

export class CreateReviewDTO extends PickType(Review, [
  'storeId',
  'userId',
  'content',
] as const) {}
