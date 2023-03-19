import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateFavoriteDTO {
  @ApiProperty({
    example: 1,
    description: '유저 아이디',
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @ApiProperty({
    example: 1,
    description: '가게 아이디',
  })
  @IsNotEmpty()
  @IsInt()
  storeId: number;
}
