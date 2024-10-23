import { IsNotEmpty, IsString } from 'class-validator';

export class GoogleLoginDTO {
  @IsString()
  @IsNotEmpty()
  token: string;
}
