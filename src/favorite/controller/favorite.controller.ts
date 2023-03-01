import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { FavoriteService } from '../service/favorite.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findFavorite() {
    return await this.favoriteService.findFavorite();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFavorite(@Body() body: CreateFavoriteDTO) {
    return await this.favoriteService.createFavorite(body);
  }
}
