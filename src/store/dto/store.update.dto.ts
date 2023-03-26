import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Store } from '../model/store.entity';

export class UpdateStoreDTO {
  // @IsString()
  @ApiProperty({
    example: '브레드 치킨집',
    description: '가게이름',
  })
  name: string;

  // @IsString()
  @ApiProperty({
    example: 'oo로 oo길 oo',
    description: '가게 주소',
  })
  address: string;

  // @IsString()
  @ApiProperty({
    example: '01033334444',
    description: '가게 전화번호',
  })
  phone: string;

  // @IsString()
  @ApiProperty({
    example: '소개글입니다.',
    description: '소개글',
  })
  content: string;

  // @IsString()
  @ApiProperty({
    example: '월,수,금',
    description: '운영 시작일',
  })
  operationHours: string;

  // @IsString()
  @ApiProperty({
    example: '화,목',
    description: '휴무일',
  })
  closedDays: string;
}
