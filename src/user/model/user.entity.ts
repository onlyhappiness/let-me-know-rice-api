import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 아이디
  @IsString()
  @IsNotEmpty()
  @Column()
  signname: string;

  // 비밀번호
  @IsString()
  @IsNotEmpty()
  @Column()
  password: string;

  // 이름
  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  // 이메일
  @IsEmail()
  @IsNotEmpty()
  @Column()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  phone: string;
}
