import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // 아이디
  // 비밀번호
  // 이름
  // 이메일
}
