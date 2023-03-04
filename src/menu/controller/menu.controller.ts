import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { MenuService } from '../service/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: '메뉴 생성' })
  @Post()
  async createMenu(@Body() body: CreateMenuDTO) {
    return await this.menuService.createMenu(body);
  }
}
