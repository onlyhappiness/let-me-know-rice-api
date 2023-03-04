import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Favorite } from 'src/favorite/model/favorite.entity';
import { ReviewEntity } from 'src/review/model/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class Users {
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

  @IsString()
  @IsNotEmpty()
  @Column()
  phone: string;

  // Favorite
  @OneToMany(() => Favorite, (favorite) => favorite.User)
  Favorite: Favorite;

  // Review
}
