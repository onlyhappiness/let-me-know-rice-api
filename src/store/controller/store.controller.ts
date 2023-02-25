import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateStoreDTO } from '../dto/store.create.dto';
import { StoreService } from '../service/store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  // 가게 생성
  @UseGuards(JwtAuthGuard)
  @Post()
  async createStore(@Body() store: CreateStoreDTO) {
    return await this.storeService.createStore(store);
  }

  // 가게 전체 보기
  @UseGuards(JwtAuthGuard)
  @Get()
  async findStoreAll() {
    return await this.storeService.findStoreAll();
  }

  // 가게 상세 보기

  // 가게 수정

  // 가게 삭제
}
