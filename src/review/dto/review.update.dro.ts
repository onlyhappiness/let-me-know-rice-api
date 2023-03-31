import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class UpdateReviewDTO {
  @ApiProperty({
    example: 1,
    description: '가게 아이디',
  })
  @IsNotEmpty()
  @IsInt()
  storeId: number;

  @ApiProperty({
    example: 1,
    description: '메뉴 아이디',
  })
  @IsNotEmpty()
  @IsInt()
  menuId: number;

  @ApiProperty({
    example: '제목',
    description: '제목',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  title: string;

  @ApiProperty({
    example: '내용',
    description: '내용',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  content: string;
}
