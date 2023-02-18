import {
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'createAt', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', comment: '수정일' })
  updatedAt: Date;
}
