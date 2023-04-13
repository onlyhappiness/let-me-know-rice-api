import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Favorite } from 'src/favorite/model/favorite.entity';
import { Menu } from 'src/menu/model/menu.entity';
import { Review } from 'src/review/model/review.entity';
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

  @ApiProperty({
    example: '빵집',
    description: '가게이름',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  // 카테고리
  // @IsString()
  // @IsNotEmpty()
  // @Column()
  // category: string;

  @ApiProperty({
    example: 'xx로 xx길 xx',
    description: '주소',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  address: string;

  @ApiProperty({
    example: '01022223333',
    description: '전화번호',
  })
  @IsNotEmpty()
  @IsNotEmpty()
  @Column()
  phone: string;

  @ApiProperty({
    example: '간단한 소개글을 입력해주세요',
    description: '소개글',
  })
  @IsString()
  @Column()
  content: string;

  @ApiProperty({
    example: '월,수,금',
    description: '운영일',
  })
  @IsString()
  @Column()
  operationHours: string;

  @ApiProperty({
    example: '화,목',
    description: '휴무일',
  })
  @IsString()
  @Column()
  closedDays: string;

  // 찜
  @OneToMany(() => Favorite, (favorite) => favorite.Store)
  Favorite: Favorite;

  // 메뉴
  @OneToMany(() => Menu, (menu) => menu.Store)
  Menu: Menu;

  // 리뷰
  @OneToMany(() => Review, (review) => review.Store)
  Review: Review;

  // 가게 사진
  @ApiProperty({
    example: '사진 url',
    description: '가게 사진',
  })
  @Column({
    nullable: true,
  })
  image: string;

  // 평점
}
