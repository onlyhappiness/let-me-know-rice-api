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

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 아이디
  @Column()
  signname: string;

  // 비밀번호
  @Column()
  password: string;

  // 이름
  @Column()
  name: string;

  // 이메일
  @Column()
  email: string;

  // 찜
  @OneToMany(() => Favorite, (favorite) => favorite.User)
  Favorite: Favorite;

  // 리뷰
  @OneToMany(() => Review, (review) => review.User)
  Review: Review;
}
