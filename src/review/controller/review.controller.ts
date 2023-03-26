import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Users } from 'src/user/model/user.entity';
import { CreateReviewDTO } from '../dto/review.create.dto';
import { ReviewService } from '../service/review.service';

@ApiTags('REVIEW')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({ summary: '리뷰 보기' })
  @Get()
  async findAllReview() {
    return '리뷰 보기';
  }

  @ApiOperation({ summary: '리뷰 상세' })
  @ApiParam({
    name: 'reviewId',
    required: true,
    description: '리뷰 아이디',
    type: 'string',
  })
  @Get('/:reviewId')
  async findReview() {
    return '리뷰 상세';
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '리뷰 생성' })
  @ApiBody({
    type: CreateReviewDTO,
  })
  @Post()
  async createReview(
    @CurrentUser() user: Users,
    @Body() body: CreateReviewDTO,
  ) {
    return await this.reviewService.createReview(user, body);
  }
}
