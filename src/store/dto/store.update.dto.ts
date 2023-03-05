import { PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Store } from '../model/store.entity';

export class UpdateStoreDTO {
  // @IsString()
  name: string;

  // @IsString()
  address: string;

  // @IsString()
  phone: string;

  // @IsString()
  content: string;

  // @IsString()
  operationHours: string;

  // @IsString()
  closeedDays: string;
}
