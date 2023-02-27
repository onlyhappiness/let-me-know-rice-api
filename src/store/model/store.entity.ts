import { IsNotEmpty, IsString } from 'class-validator';
import { Favorite } from 'src/favorite/model/favorite.entity';
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
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  // 카테고리
  @IsString()
  @IsNotEmpty()
  @Column()
  category: string;

  // 주소
  @IsString()
  @IsNotEmpty()
  @Column()
  address: string;

  // 전화번호
  @IsNotEmpty()
  @IsNotEmpty()
  @Column()
  phone: string;

  // 소개글
  @IsString()
  @Column()
  content: string;

  // 운영시간
  @IsString()
  @Column()
  operationHours: string;

  // 휴무일
  @IsString()
  @Column()
  closeedDays: string;

  // 찜
  @OneToMany(() => Favorite, (favorite) => favorite.Store)
  Favorite: Favorite;

  // 평점

  // 가게 사진
}
