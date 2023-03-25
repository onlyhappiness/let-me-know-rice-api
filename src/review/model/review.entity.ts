import { Menu } from 'src/menu/model/menu.entity';
import { Store } from 'src/store/model/store.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'review' })
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 제목

  // 내용

  @ManyToOne(() => Store, (store) => store.Review)
  @JoinColumn()
  Store: Store;

  @ManyToOne(() => Menu, (menu) => menu.Review)
  @JoinColumn()
  Menu: Menu;
}
