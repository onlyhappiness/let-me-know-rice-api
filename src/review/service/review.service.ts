import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { AuthService } from 'src/auth/service/auth.service';
import { MenuService } from 'src/menu/service/menu.service';
import { StoreService } from 'src/store/service/store.service';
import { Users } from 'src/user/model/user.entity';
import { Repository } from 'typeorm';
import { CreateReviewDTO } from '../dto/review.create.dto';
import { UpdateReviewDTO } from '../dto/review.update.dro';
import { Review } from '../model/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    private readonly authService: AuthService,
    private readonly storeService: StoreService,
    private readonly MenuService: MenuService,
  ) {}

  //** 리뷰 아이디를 통해 리뷰 찾기 */
  async findReviewById(reviewId: number) {
    const review = await this.reviewRepository.findOne({
      where: { id: reviewId },
    });
    if (!review) {
      throw new HttpException('존재하지 않는 리뷰입니다.', 400);
    }
    return review;
  }

  //** 리뷰 보기 */
  async findAllReview() {
    const review = await this.reviewRepository.find({
      relations: ['Store', 'Menu'],
    });

    return review;
  }

  //** 리뷰 상세 보기 */
  async findReview(reviewId: number) {
    return this.findReviewById(reviewId);
  }

  //** 리뷰 생성 */
  async createReview(user: Users, body: CreateReviewDTO) {
    const { id: userId } = user;
    const { storeId, menuId, title, content } = body;

    await this.authService.findUserById(userId);
    await this.storeService.findStoreById(storeId);
    await this.MenuService.findMenubyId(menuId);

    const reviewInfo = {
      User: userId,
      Store: storeId,
      Menu: menuId,
      ...body,
    };
    const createReview = plainToInstance(Review, reviewInfo);
    const review = await this.reviewRepository.save(createReview);
    return review;
  }

  //** 리뷰 수정 */
  async updateReview(user: Users, body: UpdateReviewDTO, reviewId: number) {
    const { id: userId } = user;
    const { storeId, menuId, title, content } = body;

    await this.authService.findUserById(userId);
    await this.storeService.findStoreById(storeId);
    await this.MenuService.findMenubyId(menuId);
    await this.findReviewById(reviewId);

    const reviewInfo = {
      User: userId,
      Store: storeId,
      Menu: menuId,
      title,
      content,
    };

    const createReview = plainToInstance(Review, reviewInfo);

    await this.reviewRepository.update({ id: reviewId }, createReview);
    return await this.findReview(reviewId);
  }
}
