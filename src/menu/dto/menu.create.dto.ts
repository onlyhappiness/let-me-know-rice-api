import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDTO {
  // 가게 아이디
  @ApiProperty({
    example: 1,
    description: '가게 아이디',
  })
  @IsNotEmpty()
  @IsInt()
  storeId: number;

  // 카테고리
  // @IsNotEmpty()
  // @IsString()
  // category: string;

  // 이름
  @ApiProperty({
    example: '마카롱',
    description: '메뉴 이름',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  // 가격
  @ApiProperty({
    example: '3000',
    description: '메뉴 가격',
  })
  @IsNotEmpty()
  @IsString()
  price: string;
}
