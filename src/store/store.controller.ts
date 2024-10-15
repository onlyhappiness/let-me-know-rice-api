import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateStoreDTO } from './dto/CreateStoreDto';
import { UpdateStoreDTO } from './dto/UpdateStoreDto';
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

  @Put('/:storeId')
  @ApiOperation({ summary: '가게 수정' })
  @ApiBody({ type: CreateStoreDTO })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateStore(
    @Param('storeId') storeId: string,
    @Body() body: UpdateStoreDTO,
  ) {
    return this.storeService.updateStore(storeId, body);
  }

  @Delete('/:storeId')
  @ApiOperation({ summary: '가게 삭제' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteStore(@Param('storeId') storeId: string) {
    return this.storeService.deleteStore(storeId);
  }
}
