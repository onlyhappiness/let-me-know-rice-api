import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // 회원가입
  async createUser() {
    try {
      return '유저 회원가입';
    } catch (err) {
      console.log('err: ', err);
    }
  }

  // 유저 로그인
  async login() {
    try {
      return '유저 로그인';
    } catch (err) {
      console.log('err: ', err);
    }
  }
}
