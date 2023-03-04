import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { StoreService } from 'src/store/service/store.service';
import { Repository } from 'typeorm';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { Menu } from '../model/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    private readonly storeService: StoreService,
  ) {}

  //** 전체 메뉴 보기 */
  async findAllMenu(storeId: number) {
    const menu = await this.menuRepository.find({
      where: { Store: { id: storeId } },
    });

    return menu;
  }

  //** 메뉴 생성 */
  async createMenu(body: CreateMenuDTO) {
    const { storeId } = body;
    await this.storeService.findStoreById(storeId);

    const menuInfo = {
      Store: storeId,
      ...body,
    };

    const createMenu = plainToInstance(Menu, menuInfo);
    const menu = await this.menuRepository.save(createMenu);

    return menu;
  }
}
