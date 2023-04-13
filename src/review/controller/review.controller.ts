import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Users } from 'src/user/model/user.entity';
import { CreateReviewDTO } from '../dto/review.create.dto';
import { UpdateReviewDTO } from '../dto/review.update.dro';
import { ReviewService } from '../service/review.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('REVIEW')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({ summary: '리뷰 보기' })
  @Get()
  async findAllReview() {
    return await this.reviewService.findAllReview();
  }

  @ApiOperation({ summary: '리뷰 상세' })
  @ApiParam({
    name: 'reviewId',
    required: true,
    description: '리뷰 아이디',
    type: 'string',
  })
  @Get('/:reviewId')
  async findReview(@Param('reviewId') reviewId: number) {
    return await this.reviewService.findReview(reviewId);
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

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '리뷰 수정' })
  @Put('/:reviewId')
  async updateReview(
    @Param('reviewId') reviewId: number,
    @Body() body: UpdateReviewDTO,
    @CurrentUser() user: Users,
  ) {
    return await this.reviewService.updateReview(user, body, reviewId);
  }
}
