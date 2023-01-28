import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from '../dto/join.request.dto';
import { LoginRequestDto } from '../dto/login.dto';
import { AuthService } from '../service/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('/register')
  register(@Body() body: JoinRequestDto) {
    return this.authService.createUser(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('/login')
  login(@Body() body: LoginRequestDto) {
    return this.authService.login(body);
  }
}
