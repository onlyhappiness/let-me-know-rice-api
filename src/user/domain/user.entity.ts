import { Favorite } from 'src/favorite/domain/favorite.entity';
import { Review } from 'src/review/domain/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 아이디
  @IsString()
  @IsNotEmpty()
  @Column()
  signname: string;

  // 비밀번호
  @IsString()
  @IsNotEmpty()
  @Column()
  password: string;

  // 이름
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  // 이메일
  @IsEmail()
  @IsNotEmpty()
  @Column()
  email: string;

  // 찜
  @OneToMany(() => Favorite, (favorite) => favorite.User)
  Favorite: Favorite;

  // 리뷰
  @OneToMany(() => Review, (review) => review.User)
  Review: Review;
}
