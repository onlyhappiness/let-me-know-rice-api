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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Users } from 'src/user/model/user.entity';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { UpdateFavoriteDTO } from '../dto/favorite.update.dto';
import { FavoriteService } from '../service/favorite.service';
@ApiTags('FAVORITE')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 보기' })
  @Get()
  async findAllFavorite(@CurrentUser() user: Users) {
    return await this.favoriteService.findAllFavorite(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 상세' })
  @ApiParam({
    name: 'favoriteId',
    required: true,
    description: '찜한 상품 아이디',
    type: 'string',
  })
  @Get('/:favoriteId')
  async findFavorite(@Param('favoriteId') favoriteId: number) {
    return await this.favoriteService.findFavorite(favoriteId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBody({
    type: CreateFavoriteDTO,
  })
  @ApiOperation({ summary: '찜하기' })
  @Post()
  async createFavorite(
    @CurrentUser() user: Users,
    @Body() body: CreateFavoriteDTO,
  ) {
    return await this.favoriteService.createFavorite(user, body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 수정' })
  @ApiBody({
    type: UpdateFavoriteDTO,
  })
  @ApiParam({
    name: 'favoriteId',
    required: true,
    description: '찜한 상품 아이디',
    type: 'string',
  })
  @Put('/:favoriteId')
  async updateFavorite(
    @Param('favoriteId') favoriteId: number,
    @Body() body: UpdateFavoriteDTO,
    @CurrentUser() user: Users,
  ) {
    return await this.favoriteService.updateFavorite(user, body, favoriteId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 삭제' })
  @ApiParam({
    name: 'favoriteId',
    required: true,
    description: '찜한 상품 아이디',
    type: 'string',
  })
  @Delete('/:favoriteId')
  async deleteFavorite(
    @Param('favoriteId') favoriteId: number,
    @CurrentUser() user: Users,
  ) {
    return await this.favoriteService.deleteFavorite(favoriteId, user);
  }
}
