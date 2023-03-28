import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Users } from 'src/user/model/user.entity';
import { CreateNoticeDTO } from '../dto/notice.create.dto';
import { UpdateNoticeDTO } from '../dto/notice.update.dto';
import { NoticeService } from '../service/notice.service';

@ApiTags('NOTICE')
@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  //** 공지사항 전체 보기 */
  @ApiOperation({ summary: '공지사항 보기' })
  @Get()
  async findAllReview() {
    return await this.noticeService.findAllNotice();
  }

  //** 공지사항 상세 보기 */
  @ApiOperation({ summary: '공지사항 상세 보기' })
  @ApiParam({
    name: 'noticeId',
    required: true,
    description: '공지사항 아이디',
    type: 'string',
  })
  @Get('/:noticeId')
  async findNotice(@Param('noticeId') noticeId: number) {
    return await this.noticeService.findNotice(noticeId);
  }

  //** 공지사항 등록 */
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '공지사항 등록' })
  @ApiBody({
    type: CreateNoticeDTO,
  })
  @Post()
  async createNotice(
    @CurrentUser() user: Users,
    @Body() body: CreateNoticeDTO,
  ) {
    return await this.noticeService.createNotice(user, body);
  }

  //** 공지사항 수정 */
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '공지사항 수정' })
  @ApiParam({
    name: 'noticeId',
    required: true,
    description: '공지사항 아이디',
    type: 'string',
  })
  @Put('/:noticeId')
  async updateNotice(
    @Param('noticeId') noticeId: number,
    @Body() body: UpdateNoticeDTO,
  ) {
    return await this.noticeService.updateNotice(noticeId, body);
  }

  //** 공지사항 삭제 */
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '공지사항 삭제' })
  @Delete('/:noticeId')
  async deleteNotice(@Param('noticeId') noticeId: number) {
    return await this.noticeService.deleteNotice(noticeId);
  }
}
