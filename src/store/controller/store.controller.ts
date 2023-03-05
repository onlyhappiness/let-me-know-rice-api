import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateStoreDTO } from '../dto/store.create.dto';
import { UpdateStoreDTO } from '../dto/store.update.dto';
import { StoreService } from '../service/store.service';

@ApiTags('STORE')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 생성' })
  @Post()
  async createStore(@Body() store: CreateStoreDTO) {
    return await this.storeService.createStore(store);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 전체보기' })
  @Get()
  async findStoreAll() {
    return await this.storeService.findStoreAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 상세보기' })
  @Get('/:storeId')
  async findStore(@Param('storeId') storeId: number) {
    return await this.storeService.findStore(storeId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 수정' })
  @Put()
  async updateStore(
    @Body() body: UpdateStoreDTO,
    @Query('storeId') storeId: number,
  ) {
    return await this.storeService.updateStore(body, storeId);
  }

  // 가게 삭제
}
