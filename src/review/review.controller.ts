import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common';
import { User } from 'src/user/domain/entity/user.entity';
import { CreateReviewDTO } from './dto/CreateReviewDto';
import { ReviewService } from './review.service';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('/')
  @ApiOperation({ summary: '리뷰 조회' })
  async getReviews() {
    return this.reviewService.getReview();
  }

  @Get('/:reviewId')
  @ApiOperation({ summary: '리뷰 상세조회' })
  async getReviewById(@Param('reviewId') reviewId: string) {
    return this.reviewService.getReviewById(reviewId);
  }

  @Post('/')
  @ApiOperation({ summary: '리뷰 생성' })
  @ApiBody({ type: CreateReviewDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async createReview(@Body() createReviewDTO: CreateReviewDTO) {
    return this.reviewService.createReview(createReviewDTO);
  }

  @Delete('/:reviewId')
  @ApiOperation({ summary: '리뷰 삭제' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteReview(
    @Param('reviewId') reviewId: string,
    @CurrentUser() user: User,
  ) {
    return this.reviewService.deleteReview(reviewId, user);
  }
}
