import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'restaurant' })
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 가게 이름
  // 음식 카테고리
  // 주소
  // 가게사진
  // 전화번호
  // 소개글
  // 운영시간
  // 휴무일
  // 평점
  // 찜수
  // 리뷰수
}
