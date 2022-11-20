import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// const options = {};

@Index('id', ['id'], { unique: true })
@Entity({ name: 'user' }) // user 테이블 명
export class UserEntity {
  // id
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 아이디
  @ApiProperty({
    example: 'test11',
    description: '유저 아이디',
  })
  @IsString()
  @IsNotEmpty({ message: '유저 아이디를 입력해주세요.' })
  @Column({
    type: 'varchar',
    unique: true,
    comment: '유저 아이디',
  })
  userId: string;

  // 비밀번호
  @ApiProperty({
    example: 'test1234!',
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  @Column({
    type: 'varchar',
    comment: '비밀번호',
  })
  password: string;

  // 이름
  @ApiProperty({
    example: '브레드',
    description: '유저 이름',
  })
  @IsString()
  @IsNotEmpty({ message: '유저 이름을 입력해주세요.' })
  @Column({
    type: 'varchar',
    comment: '유저 이름',
  })
  name: string;

  // 이메일
  @ApiProperty({
    example: 'test11@gmail.com',
    description: '유저 이메일',
  })
  @IsEmail({}, { message: '올바른 이메일을 작성해주세요.' })
  @IsNotEmpty({ message: '유저 이메일을 입력해주세요.' })
  @Column({
    type: 'varchar',
    unique: true,
    comment: '유저 이메일',
  })
  email: string;

  // Relation
}
