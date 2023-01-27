import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('/register')
  register() {
    return this.authService.createUser;
  }

  @ApiOperation({ summary: '로그인' })
  @Post('/login')
  login() {
    return this.authService.login;
  }
}
