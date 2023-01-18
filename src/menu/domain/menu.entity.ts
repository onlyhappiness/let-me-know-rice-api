import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'menu' })
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  // 가게 아이디
  // 카테고리
  // 메뉴이름
  // 가격
  // 메뉴사진
  // 인기여부
}
