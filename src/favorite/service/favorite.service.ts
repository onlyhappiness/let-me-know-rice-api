import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Store } from 'src/store/model/store.entity';
import { User } from 'src/user/model/user.entity';
import { Connection, QueryRunner, Repository } from 'typeorm';
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

  //** 찜한 내역 보기 */
  async findFavorite() {
    return '찜한 내역 보기';
  }

  //** 찜하기 */
  async createFavorite(body: CreateFavoriteDTO) {
    const { userId, storeId } = body;

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new HttpException('해당 유저는 존재하지 않습니다.', 400);
    }

    const store = await this.storeRepository.findOne({
      where: { id: storeId },
    });
    if (!store) {
      throw new HttpException('존재하지 않는 가게입니다.', 400);
    }

    const favoriteInfo = {
      User: userId,
      Store: storeId,
    };
    const createFavorite = plainToInstance(Favorite, favoriteInfo);
    const favorite = await this.favoriteRepository.save(createFavorite);

    return favorite;
  }
}
