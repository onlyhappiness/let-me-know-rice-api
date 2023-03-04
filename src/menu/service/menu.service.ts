import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Store } from 'src/store/model/store.entity';
import { Repository } from 'typeorm';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { Menu } from '../model/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  //** 메뉴 생성 */
  async createMenu(body: CreateMenuDTO) {
    const { storeId } = body;

    // TODO: storeRepository 개선
    const store = await this.storeRepository.findOne({
      where: { id: storeId },
    });
    if (!store) {
      throw new HttpException('존재하지 않는 가게입니다.', 400);
    }

    const menuInfo = {
      Store: storeId,
      ...body,
    };

    const createMenu = plainToInstance(Menu, menuInfo);
    const menu = await this.menuRepository.save(createMenu);

    return menu;
  }
}
