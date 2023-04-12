import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { StoreService } from 'src/store/service/store.service';
import { Repository } from 'typeorm';
import { CreateMenuDTO } from '../dto/menu.create.dto';
import { UpdateMenuDTO } from '../dto/menu.update.dto';
import { Menu } from '../model/menu.entity';
import { UploadService } from 'src/upload/service/upload.service';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
    private readonly storeService: StoreService,
    private readonly uploadService: UploadService,
  ) {}

  //** 메뉴 아이디로 메뉴 찾기 */
  async findMenubyId(menuId: number) {
    const menu = await this.menuRepository.findOne({
      where: { id: menuId },
      relations: ['Store'],
    });

    if (!menu) {
      throw new HttpException('해당 메뉴가 없습니다.', 400);
    }
    return menu;
  }

  //** 전체 메뉴 보기 */
  async findAllMenu(storeId: number) {
    const menu = await this.menuRepository.find({
      where: { Store: { id: storeId } },
    });

    return menu;
  }

  //** 메뉴 상세 찾기 */
  async findMenu(menuId: number) {
    await this.findMenubyId(menuId);
  }

  //** 메뉴 생성 */
  async createMenu(body: CreateMenuDTO, image) {
    const { storeId } = body;
    await this.storeService.findStoreById(storeId);

    // 이미지 등록
    const url = await this.uploadService.uploadFile(image);

    const menuInfo = {
      Store: storeId,
      image: url,
      ...body,
    };

    const createMenu = plainToInstance(Menu, menuInfo);
    const menu = await this.menuRepository.save(createMenu);

    return menu;
  }

  //** 메뉴 수정 */
  async updateMenu(menuId: number, body: UpdateMenuDTO) {
    await this.findMenu(menuId);

    // const { name, price } = body;

    await this.menuRepository.update({ id: menuId }, body);
    return await this.findMenu(menuId);
  }

  //** 메뉴 삭제 */
  async deleteMenu(menuId: number) {
    await this.findMenu(menuId);

    await this.menuRepository.delete({ id: menuId });
    return true;
  }
}
