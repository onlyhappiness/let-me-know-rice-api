import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { CreateReviewDTO } from './dto/CreateReviewDto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('/')
  @ApiOperation({ summary: '리뷰 조회' })
  async getReviews() {
    return this.reviewService.getReview();
  }

  @Post('/')
  @ApiOperation({ summary: '리뷰 생성' })
  @ApiBody({ type: CreateReviewDTO })
  async createReview(@Body() createReviewDTO: CreateReviewDTO) {
    return this.reviewService.createReview(createReviewDTO);
  }
}
