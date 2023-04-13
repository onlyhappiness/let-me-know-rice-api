import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Menu } from 'src/menu/model/menu.entity';
import { Store } from 'src/store/model/store.entity';
import { Users } from 'src/user/model/user.entity';
import {
  Column,
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

  @ApiProperty({
    example: '제목',
    description: '제목',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  title: string;

  @ApiProperty({
    example: '내용',
    description: '내용',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  content: string;

  @ApiProperty({
    example: '사진 url',
    description: '리뷰 사진',
  })
  @Column({
    nullable: true,
  })
  image: string;

  @ManyToOne(() => Users, (user) => user.Review)
  @JoinColumn()
  User: Users;

  @ManyToOne(() => Store, (store) => store.Review)
  @JoinColumn()
  Store: Store;

  @ManyToOne(() => Menu, (menu) => menu.Review)
  @JoinColumn()
  Menu: Menu;
}
