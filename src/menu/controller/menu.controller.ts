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
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { UpdateMenuDTO } from '../dto/menu.update.dto';
import { MenuService } from '../service/menu.service';

@ApiTags('MENU')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: '메뉴 보기' })
  @ApiQuery({
    name: 'storeId',
    required: true,
    description: '가게 아이디',
    type: 'string',
  })
  @Get()
  async findAllMenu(@Query('storeId') storeId: number) {
    return await this.menuService.findAllMenu(storeId);
  }

  @ApiOperation({ summary: '메뉴 상세' })
  @ApiParam({
    name: 'menuId',
    required: true,
    description: '메뉴 아이디',
    type: 'string',
  })
  @Get('/:menuId')
  async findMenu(@Param('menuId') menuId: number) {
    return await this.menuService.findMenu(menuId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '메뉴 생성' })
  @Post()
  async createMenu(@Body() body: CreateMenuDTO) {
    return await this.menuService.createMenu(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '메뉴 수정' })
  @ApiParam({
    name: 'menuId',
    required: true,
    description: '메뉴 아이디',
    type: 'string',
  })
  @Put('/:menuId')
  async updateMenu(@Body() body: UpdateMenuDTO) {
    return await this.menuService.updateMenu(body);
  }
}