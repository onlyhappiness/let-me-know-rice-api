import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CursorQueryDTO {
  @ApiPropertyOptional({ description: '마지막으로 불러온 데이터의 ID' })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({ description: '불러올 데이터 수', default: 10 })
  @IsOptional()
  @IsNumber()
  limit?: number;

  @ApiPropertyOptional({
    description: '정렬 기준 (필드명)',
    default: 'createdAt',
  })
  @IsOptional()
  @IsString()
  sortBy?: string = 'createdAt';

  @ApiPropertyOptional({ description: '정렬 방향 (asc/desc)', default: 'desc' })
  @IsOptional()
  @IsString()
  order?: 'asc' | 'desc' = 'desc';
}
