import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
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

@Entity({ name: 'notice' })
export class Notice {
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

  // 글쓴이
  @ManyToOne(() => Users, (user) => user.Notice, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  User: Users;
}
