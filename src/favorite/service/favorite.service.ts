import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'src/store/model/store.entity';
import { User } from 'src/user/model/user.entity';
import { Connection, Repository } from 'typeorm';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { Favorite } from '../model/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    private readonly connection: Connection,
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  //** 찜하기 */
  async createFavorite(body) {
    return '찜하기';
  }
}
