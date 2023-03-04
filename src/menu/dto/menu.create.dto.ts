import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMenuDTO {
  // 가게 아이디
  @IsNotEmpty()
  @IsInt()
  storeId: number;

  // 카테고리
  // @IsNotEmpty()
  // @IsString()
  // category: string;

  // 이름
  @IsNotEmpty()
  @IsString()
  name: string;

  // 가격
  @IsNotEmpty()
  @IsString()
  price: string;
}
