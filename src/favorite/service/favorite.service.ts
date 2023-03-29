import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { AuthService } from 'src/auth/service/auth.service';
import { StoreService } from 'src/store/service/store.service';
import { Users } from 'src/user/model/user.entity';
import { Repository } from 'typeorm';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { UpdateFavoriteDTO } from '../dto/favorite.update.dto';
import { Favorite } from '../model/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
    private readonly authService: AuthService,
    private readonly storeService: StoreService,
  ) {}

  //** 찜한 내역 보기 */
  async findAllFavorite(user: Users) {
    const { id } = user;

    const favorite = await this.favoriteRepository.find({
      relations: { Store: true },
      where: { User: { id } },
    });

    return favorite;
  }

  //** 찜한 상품 상세 보기 */
  async findFavorite(favoriteId: number) {
    const favorite = await this.favoriteRepository.findOne({
      where: { id: favoriteId },
      relations: ['User', 'Store'],
    });
    if (!favorite) {
      throw new HttpException('찜한 상품이 없습니다.', 400);
    }
    return favorite;
  }

  //** 찜하기 */
  async createFavorite(user: Users, body: CreateFavoriteDTO) {
    const { id: userId } = user;

    const { storeId } = body;

    await this.authService.findUserById(userId);
    await this.storeService.findStoreById(storeId);

    const favoriteInfo = {
      User: userId,
      Store: storeId,
    };
    const createFavorite = plainToInstance(Favorite, favoriteInfo);
    const favorite = await this.favoriteRepository.save(createFavorite);
    return favorite;
  }

  //** 찜한 상품 수정 */
  async updateFavorite(
    user: Users,
    body: UpdateFavoriteDTO,
    favoriteId: number,
  ) {
    const { id: userId } = user;
    const { storeId } = body;

    await this.authService.findUserById(userId);
    await this.storeService.findStoreById(storeId);

    await this.findFavorite(favoriteId);

    const favoriteInfo = {
      User: userId,
      Store: storeId,
    };

    const createFavorite = plainToInstance(Favorite, favoriteInfo);

    await this.favoriteRepository.update({ id: favoriteId }, createFavorite);
    return await this.findFavorite(favoriteId);
  }

  //** 찜한 상품 삭제 */
  async deleteFavorite(favoriteId: number, user: Users) {
    const { id: userId } = user;
    await this.authService.findUserById(userId);

    await this.findFavorite(favoriteId);

    await this.favoriteRepository.delete({ id: favoriteId });

    return true;
  }
}
