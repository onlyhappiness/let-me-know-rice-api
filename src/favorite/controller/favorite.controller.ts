import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { Users } from 'src/user/model/user.entity';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { FavoriteService } from '../service/favorite.service';
@ApiTags('FAVORITE')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 보기' })
  @Get()
  async findFavorite(@CurrentUser() user: Users) {
    return await this.favoriteService.findFavorite(user);
  }

  // FIXME: user-decorator
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜하기' })
  @Post()
  async createFavorite(@Body() body: CreateFavoriteDTO) {
    return await this.favoriteService.createFavorite(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '찜한 상품 삭제' })
  @Delete()
  async deleteFavorite(@CurrentUser() user: Users) {
    return await this.favoriteService.deleteFavorite(user);
  }
}
