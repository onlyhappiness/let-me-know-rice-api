import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'restaurant' })
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  // 가게 이름
  // 음식 카테고리
  // 가게 사진
  // 주소
  // 전화번호
  // 소개글
  // 휴무일
}
