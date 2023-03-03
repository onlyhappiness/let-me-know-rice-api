import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { FavoriteService } from '../service/favorite.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  // FIXME: user-decorator
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 보기' })
  @Get()
  async findFavorite() {
    return await this.favoriteService.findFavorite();
  }

  // FIXME: user-decorator
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜하기' })
  @Post()
  async createFavorite(@Body() body: CreateFavoriteDTO) {
    return await this.favoriteService.createFavorite(body);
  }
}
