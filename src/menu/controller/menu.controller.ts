import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { MenuService } from '../service/menu.service';

@ApiTags('MENU')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: '메뉴 보기' })
  @Get()
  async findAllMenu(@Query('storeId') storeId: number) {
    return await this.menuService.findAllMenu(storeId);
  }

  @ApiOperation({ summary: '메뉴 생성' })
  @Post()
  async createMenu(@Body() body: CreateMenuDTO) {
    return await this.menuService.createMenu(body);
  }
}
