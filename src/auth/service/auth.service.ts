import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from '../dto/join.request.dto';
import { LoginRequestDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  // 회원가입
  async createUser(body: JoinRequestDto) {
    try {
      console.log('body: ', body);
      return '유저 회원가입';
    } catch (err) {
      console.log('err: ', err);
      return '에러 나와바';
    }
  }

  // 유저 로그인
  async login(body: LoginRequestDto) {
    try {
      console.log('body: ', body);
      return '유저 로그인';
    } catch (err) {
      console.log('err: ', err);
    }
  }
}
