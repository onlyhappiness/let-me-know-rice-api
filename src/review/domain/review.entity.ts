import { Menu } from 'src/menu/domain/menu.entity';
import { Store } from 'src/store/domain/store.entity';
import { User } from 'src/user/domain/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
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

  // 유저 아이디
  @ManyToOne(() => User, (user) => user.id)
  User: User;

  // 가게 아이디
  @ManyToOne(() => Store, (store) => store.id)
  Store: Store;

  // 메뉴 아이디

  // 내용
  @Column()
  content: string;

  // 별점
}
