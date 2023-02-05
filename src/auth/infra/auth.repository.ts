import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/user/domain/user.entity';
import { Connection, QueryRunner } from 'typeorm';

@Injectable()
export class AuthRepository {
  constructor(private readonly connection: Connection) {}

  // 회원가입
  async createUser(data: any): Promise<any> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    // TODO: 중복체크

    await queryRunner.startTransaction();

    try {
      const user = await queryRunner.manager.getRepository(User).save(data);

      const { password, ...withoutPassword } = user;

      await queryRunner.commitTransaction();
      return withoutPassword;
    } catch (error) {
      console.log('error: ', error);
      await queryRunner.rollbackTransaction();
      throw new HttpException(error, 400);
    } finally {
      await queryRunner.release();
    }
  }

  // 로그인
  async login(body: any) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();

    // const { signname, password } = body;

    await queryRunner.startTransaction();

    try {
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new HttpException(error, 400);
    } finally {
      await queryRunner.release();
    }
  }
}
