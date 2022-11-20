import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('00. Auth')
@Controller('auth')
export class AuthController {
  // 회원 가입
  @Post('/register')
  async RegisterUser() {
    return '회원가입';
  }

  // 로그인
  @Post('/login')
  async LoginUser() {
    return '로그인';
  }

  // 로그인 유저 정보 조회
  @Get('/login')
  async CurrentUser() {
    return '로그인 유저';
  }
}
