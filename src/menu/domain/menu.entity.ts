import { Review } from 'src/review/domain/review.entity';
import { Store } from 'src/store/domain/store.entity';
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

  // 가게 아이디
  @ManyToOne(() => Store, (store) => store.Menu)
  @JoinColumn({ name: 'storeId', referencedColumnName: 'id' })
  Store: Store;

  // 카테고리
  @Column()
  category: string;

  // 메뉴이름
  @Column()
  name: string;

  // 가격
  @Column()
  price: string;

  // 리뷰
  @OneToMany(() => Review, (review) => review.Menu)
  Review: Review;

  // 메뉴사진

  // 인기여부
}
