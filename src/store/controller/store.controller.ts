import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiBody({
    type: CreateStoreDTO,
  })
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
  @ApiParam({
    name: 'storeId',
    required: true,
    description: '가게 아이디',
    type: 'string',
  })
  @Get('/:storeId')
  async findStore(@Param('storeId') storeId: number) {
    return await this.storeService.findStore(storeId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 수정' })
  @ApiBody({
    type: UpdateStoreDTO,
  })
  @ApiQuery({
    name: 'storeId',
    required: true,
    description: '가게아이디',
    type: 'string',
  })
  @Put()
  async updateStore(
    @Body() body: UpdateStoreDTO,
    @Query('storeId') storeId: number,
  ) {
    return await this.storeService.updateStore(body, storeId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '가게 삭제' })
  @ApiParam({
    name: 'storeId',
    required: true,
    description: '가게 아이디',
    type: 'string',
  })
  @Delete('/:storeId')
  async deleteStore(@Param('storeId') storeId: number) {
    return await this.storeService.deleteStore(storeId);
  }
}
