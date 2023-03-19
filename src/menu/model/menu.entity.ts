import { ApiProperty } from '@nestjs/swagger';
import { Store } from 'src/store/model/store.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  // 가게 아이디
  @ManyToOne(() => Store, (store) => store.Menu)
  @JoinColumn()
  Store: Store;

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

  // 리뷰

  // 메뉴 사진

  // 인기여부
}
