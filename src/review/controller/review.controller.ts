import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { ReviewService } from '../service/review.service';

@ApiTags('REVIEW')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '리뷰 생성' })
  @Post()
  async createReview() {
    return '리뷰 생성';
  }
}
