import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'favorite' })
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  // 유저 id
  // 가게 id
}
