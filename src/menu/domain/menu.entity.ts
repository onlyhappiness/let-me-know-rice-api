import {
  Column,
  CreateDateColumn,
  Entity,
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

  // 카테고리
  @Column()
  category: string;

  // 메뉴이름
  @Column()
  name: string;

  // 가격
  @Column()
  price: string;

  // 메뉴사진

  // 인기여부
}
