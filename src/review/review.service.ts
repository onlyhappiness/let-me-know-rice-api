import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './domain/entity/review.entity';
import { CreateReviewDTO } from './dto/CreateReviewDto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<Review>,
  ) {}

  async getReview() {
    const review = await this.reviewModel
      .find()
      .populate('userId', '-password')
      .populate('storeId')
      .exec();

    return review;
  }

  async createReview(body: CreateReviewDTO) {
    const review = await this.reviewModel.create(body);
    return review;
  }
}
