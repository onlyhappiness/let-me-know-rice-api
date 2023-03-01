import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateFavoriteDTO {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  storeId: number;
}
