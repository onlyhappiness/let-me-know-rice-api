import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { error } from 'console';

import { JoinRequestDto } from '../dto/join.request.dto';
import { LoginRequestDto } from '../dto/login.dto';
import { AuthRepository } from '../infra/auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authRepository: AuthRepository,
  ) {}

  // 회원가입
  async createUser(body: JoinRequestDto) {
    try {
      const { signname, password, name, email } = body;

      const hashedPassword = await bcrypt.hash(password, 12);

      return this.authRepository.createUser({
        signname,
        password: hashedPassword,
        name,
        email,
      });
    } catch (error) {
      console.log('err: ', error);
      throw new HttpException(error, 400);
    }
  }

  // 유저 로그인
  async login(body: LoginRequestDto) {
    try {
      console.log('body: ', body);
      return '유저 로그인';
    } catch (errror) {
      console.log('err: ', error);
      throw new HttpException(error, 400);
    }
  }
}
