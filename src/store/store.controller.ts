import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateStoreDTO } from './dto/CreateStoreDto';
import { StoreService } from './store.service';

@ApiTags('Store')
@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('/')
  @ApiOperation({ summary: '가게 전체 조회' })
  async getStore() {
    return this.storeService.getStore();
  }

  @Get('/:storeId')
  @ApiOperation({ summary: '가게 단일 조회' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getStoreById(@Param('storeId') storeId: string) {
    return this.storeService.getStoreById(storeId);
  }

  @Post('/')
  @ApiOperation({ summary: '가게 생성' })
  @ApiBody({ type: CreateStoreDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async createStore(@Body() body: CreateStoreDTO) {
    return this.storeService.createStore(body);
  }
}
