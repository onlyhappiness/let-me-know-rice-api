import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDTO } from '../dto/store.create.dto';
import { UpdateStoreDTO } from '../dto/store.update.dto';
import { Store } from '../model/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  //** 가게 아이디로 가게찾기 */
  async findStoreById(storeId: number) {
    const store = await this.storeRepository.findOne({
      where: { id: storeId },
    });
    if (!store) {
      throw new HttpException('존재하지 않는 가게입니다.', 400);
    }
    return store;
  }

  //** 가게 이름 중복 체크 */
  async findStoreByName(storeName: string) {
    const store = await this.storeRepository.findOne({
      where: { name: storeName },
    });
    if (store) {
      throw new HttpException('이미 등록된 가게입니다.', 400);
    }
    return store;
  }

  //** 가게 생성 */
  async createStore(body: CreateStoreDTO) {
    const { name, address } = body;
    await this.findStoreByName(name);

    const duplicateAddress = await this.storeRepository.findOne({
      where: { address },
    });
    if (duplicateAddress) {
      throw new HttpException('이미 사용중인 주소입니다.', 400);
    }

    return await this.storeRepository.save(body);
  }

  //** 가게 전체 보기 */
  async findStoreAll() {
    return this.storeRepository.find();
  }

  //** 가게 상세 보기 */
  async findStore(storeId: number) {
    await this.findStoreById(storeId);
  }

  //** 가게 수정하기 */
  async updateStore(body: UpdateStoreDTO, storeId) {
    const { name, address, phone, content, operationHours, closeedDays } = body;
    await this.findStoreById(storeId);

    await this.storeRepository.update(
      { id: storeId },
      {
        name,
        address,
        phone,
        content,
        operationHours,
        closeedDays,
      },
    );
    return await this.findStoreById(storeId);
  }

  //** 가게 삭제 */
  async deleteStore(storeId: number) {
    if (!storeId) {
      throw new HttpException('가게 아이디를 입력해주세요', 401);
    }
    await this.findStoreById(storeId);
    await this.storeRepository.delete({
      id: storeId,
    });
    return '해당 가게를 삭제하였습니다.';
  }
}
