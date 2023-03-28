import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Notice } from '../model/notice.entity';

export class UpdateNoticeDTO {
  @ApiProperty({
    example: '제목',
    description: '제목',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '내용',
    description: '내용',
  })
  @IsString()
  content: string;
}
