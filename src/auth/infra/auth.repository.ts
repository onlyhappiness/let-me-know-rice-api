import { Injectable } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';

@Injectable()
export class AuthRepository {
  // constructor(private readonly connection: Connection) {}

  // 회원가입
  async createUser(data: any) {
    return data;
  }

  // 로그인
  async login() {
    return '로그인';
  }
}
