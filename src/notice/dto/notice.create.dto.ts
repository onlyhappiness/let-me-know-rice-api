import { PickType } from '@nestjs/swagger';
import { Notice } from '../model/notice.entity';

// title
// content
// image
export class CreateNoticeDTO extends PickType(Notice, [
  'title',
  'content',
] as const) {}
