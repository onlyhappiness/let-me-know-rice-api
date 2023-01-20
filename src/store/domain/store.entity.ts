import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // 가게 이름
  @Column()
  name: string;

  // 음식 카테고리
  @Column()
  foodCategory: string;

  // 주소
  @Column()
  address: string;

  // 전화번호
  @Column()
  phone: string;

  // 소개글
  @Column()
  content: string;

  // 운영시간
  @Column()
  operationHours: string;

  // 휴무일
  @Column()
  closedDays: string;

  // 찜수

  // 리뷰수

  // 평점

  // 가게사진
}
