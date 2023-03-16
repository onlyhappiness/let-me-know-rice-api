import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateFavoriteDTO {
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsNotEmpty()
  @IsInt()
  storeId: number;
}
