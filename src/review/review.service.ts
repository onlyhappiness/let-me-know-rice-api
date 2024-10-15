import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/domain/entity/user.entity';
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
      .populate('user', '-password')
      .populate('store')
      .exec();

    return review;
  }

  async getReviewById(reviewId: string) {
    const review = await this.reviewModel.findById(reviewId);
    return review;
  }

  async createReview(body: CreateReviewDTO) {
    const review = await this.reviewModel.create(body);
    return review;
  }

  async deleteReview(reviewId: string, currentUser: User) {
    const { _id: userId } = currentUser;
    const review = await this.reviewModel.findById(reviewId);

    // 리뷰가 존재하지 않으면 null을 반환합니다.
    if (!review) {
      throw new NotFoundException('리뷰가 존재하지 않습니다.');
    }

    // 리뷰 작성자의 ID와 전달받은 userId가 일치하는지 확인합니다.
    if (review.userId.toString() !== userId.toString()) {
      throw new ForbiddenException(
        '권한이 없습니다. 리뷰 작성자만 삭제할 수 있습니다.',
      );
    }

    // 권한 확인이 완료되면 리뷰를 삭제합니다.
    const deletedReview = await this.reviewModel.findByIdAndDelete(reviewId);
    return deletedReview;
  }
}
