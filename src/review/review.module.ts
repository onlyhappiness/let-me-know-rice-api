import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './controller/review.controller';
import { Review } from './model/review.entity';
import { ReviewService } from './service/review.service';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewService],
  controllers: [ReviewController],
  exports: [ReviewService, ReviewModule],
})
export class ReviewModule {}
