import { ApiProperty } from '@nestjs/swagger';
import { Review } from 'src/review/model/review.entity';
import { Store } from 'src/store/model/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'menu' })
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 카테고리
  // @Column()
  // category: string;

  // 메뉴이름
  @ApiProperty({
    example: '마카롱',
    description: '메뉴이름',
  })
  @Column()
  name: string;

  // 가격
  @ApiProperty({
    example: '3000',
    description: '가격',
  })
  @Column()
  price: string;

  // 메뉴 사진
  @ApiProperty({
    example: '사진 url',
    description: '메뉴 사진',
  })
  @Column({
    nullable: true,
  })
  image: string;

  // 가게 아이디
  @ManyToOne(() => Store, (store) => store.Menu)
  @JoinColumn()
  Store: Store;

  // 리뷰
  @OneToMany(() => Review, (review) => review.Menu)
  Review: Review;

  // 인기여부
}
