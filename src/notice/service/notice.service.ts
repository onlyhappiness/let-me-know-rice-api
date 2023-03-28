import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { AuthService } from 'src/auth/service/auth.service';
import { Users } from 'src/user/model/user.entity';
import { Repository } from 'typeorm';
import { CreateNoticeDTO } from '../dto/notice.create.dto';
import { UpdateNoticeDTO } from '../dto/notice.update.dto';
import { Notice } from '../model/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
    private readonly authService: AuthService,
  ) {}

  //** 공지사항 아이디로 공지사항 찾기 */
  async findNoticeById(noticeId: number) {
    const notice = await this.noticeRepository.findOne({
      where: { id: noticeId },
    });
    if (!notice) {
      throw new HttpException('존재하지 않는 공지사항입니다.', 400);
    }
    return notice;
  }

  //** 공지사항 전체 보기 */
  async findAllNotice() {
    return this.noticeRepository.find();
  }

  //** 공지사항 상세 보기 */
  async findNotice(noticeId: number) {
    await this.findNoticeById(noticeId);
  }

  //** 공지사항 등록하기 */
  async createNotice(user: Users, body: CreateNoticeDTO) {
    console.log('user:::::::::::::', user);
    const { id: userId } = user;

    const { title, content } = body;
    await this.authService.findUserById(userId);

    const noticeInfo = {
      User: userId,
      title,
      content,
    };

    const createNotice = plainToInstance(Notice, noticeInfo);
    const notice = await this.noticeRepository.save(createNotice);
    return notice;
  }

  //** 공지사항 수정 */
  async updateNotice(noticeId: number, body: UpdateNoticeDTO) {
    await this.findNoticeById(noticeId);

    // const { title, content } = body;

    await this.noticeRepository.update({ id: noticeId }, body);
    return await this.findNoticeById(noticeId);
  }

  //** 공지사항 삭제 */
  async deleteNotice(noticeId: number) {
    await this.findNoticeById(noticeId);

    await this.noticeRepository.delete({ id: noticeId });
    return true;
  }
}
