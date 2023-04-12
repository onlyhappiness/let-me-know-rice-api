import { IsString } from 'class-validator';
import { Notice } from 'src/notice/model/notice.entity';
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

@Entity({ name: 'photo' })
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @IsString()
  url: string;

  // store
  // @ManyToOne(() => Store, (store) => store.Photo)
  // @JoinColumn()
  // Store: Store;

  // notice
  // @ManyToOne(() => Notice, (notice) => notice.Photo)
  // @JoinColumn()
  // Notice: Notice;
}
