import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDTO } from '../dto/review.create.dto';
import { Review } from '../model/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  //** 리뷰 생성 */
  async createReview(user, body: CreateReviewDTO) {
    const { storeId, menuId, content } = body;
  }
}
