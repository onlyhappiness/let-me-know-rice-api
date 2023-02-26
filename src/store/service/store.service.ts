import {
  HttpException,
  Injectable,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDTO } from '../dto/store.create.dto';
import { StoreEntity } from '../model/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreEntity)
    private readonly storeRepository: Repository<StoreEntity>,
  ) {}

  //** 가게 생성 */
  async createStore(body: CreateStoreDTO) {
    const { name, category, address, phone } = body;
    // console.log('store: ', store);
    const duplicateStore = await this.storeRepository.findOne({
      where: { name },
    });
    if (duplicateStore) {
      throw new HttpException('이미 등록된 가게입니다.', 400);
    }

    const duplicateAddress = await this.storeRepository.findOne({
      where: { address },
    });
    if (duplicateAddress) {
      throw new HttpException('이미 사용중인 주소입니다.', 400);
    }

    const store = await this.storeRepository.save(body);
    return store;
  }

  //** 가게 전체 보기 */
  async findStoreAll() {
    const store = this.storeRepository.find();
    return store;
  }

  //** 가게 상세 보기 */
  async findStore(storeId: number) {
    const store = this.storeRepository.findOne({
      where: { id: storeId },
    });
    if (!store) {
      throw new HttpException('해당 가게가 존재하지 않습니다.', 400);
    }

    return store;
  }
}
