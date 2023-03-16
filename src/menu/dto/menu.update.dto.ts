import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateMenuDTO {
  // 가게 아이디
  @IsNotEmpty()
  @IsInt()
  storeId: number;

  // category: string;

  // 이름
  name: string;

  // 가격
  price: string;
}
