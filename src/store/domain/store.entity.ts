import { Favorite } from 'src/favorite/domain/favorite.entity';
import { Menu } from 'src/menu/domain/menu.entity';
import { Review } from 'src/review/domain/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 가게 이름
  @Column()
  name: string;

  // 음식 카테고리
  @Column()
  foodCategory: string;

  // 주소
  @Column()
  address: string;

  // 전화번호
  @Column()
  phone: string;

  // 소개글
  @Column()
  content: string;

  // 운영시간
  @Column()
  operationHours: string;

  // 휴무일
  @Column()
  closedDays: string;

  // 찜
  @OneToMany(() => Favorite, (favorite) => favorite.Store)
  Favorite: Favorite;

  // 리뷰
  @OneToMany(() => Review, (review) => review.Store)
  Review: Review;

  // 메뉴
  @OneToMany(() => Menu, (menu) => menu.Store)
  Menu: Menu;

  // 평점

  // 가게사진
}
