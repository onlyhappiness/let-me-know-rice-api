import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommonService } from 'src/common/common.service';
import { PaginationQueryDTO } from 'src/common/dto/PaginationQueryDto';
import { Store } from './domain/entity/store.entity';
import { CreateStoreDTO } from './dto/CreateStoreDto';
import { UpdateStoreDTO } from './dto/UpdateStoreDto';

@Injectable()
export class StoreService {
  constructor(
    private readonly paginationService: CommonService,

    @InjectModel(Store.name) private readonly storeModel: Model<Store>,
  ) {}

  async getStore(query: PaginationQueryDTO) {
    // const stores = await this.storeModel.find();
    // return stores;
    return this.paginationService.paginate(this.storeModel, query, {}, []);
  }

  async getStoreById(storeId: string) {
    const store = await this.storeModel.findById(storeId);
    return store;
  }

  async createStore(body: CreateStoreDTO) {
    const store = await this.storeModel.create(body);
    return store;
  }

  async updateStore(storeId: string, body: UpdateStoreDTO) {
    const store = await this.storeModel.findByIdAndUpdate(storeId, body);
    return store;
  }

  async deleteStore(storeId: string) {
    const store = await this.storeModel.findByIdAndDelete(storeId);
    return store;
  }
}
