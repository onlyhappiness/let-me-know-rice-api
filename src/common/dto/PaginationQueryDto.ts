import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, Min } from 'class-validator';

export class PaginationQueryDTO {
  @ApiPropertyOptional({ description: '페이지 번호', default: 1 })
  @Type(() => Number)
  @IsOptional()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ description: '페이지 당 항목 수', default: 10 })
  @Type(() => Number)
  @IsOptional()
  @Min(1)
  limit?: number = 10;

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
