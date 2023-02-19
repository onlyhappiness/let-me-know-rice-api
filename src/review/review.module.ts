import { Module } from '@nestjs/common';
import { ReviewController } from './controller/review.controller';
import { ReviewService } from './service/review.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
