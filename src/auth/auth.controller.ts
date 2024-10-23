import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common';
import { User } from 'src/user/domain/entity/user.entity';
import { AuthService } from './auth.service';
import { GoogleLoginDTO } from './dto/GoogleLoginDto';
import { LoginUserDTO } from './dto/LoginUserDto';
import { RegisterUserDTO } from './dto/RegisterUserDto';
import { JwtAuthGuard } from './jwt/jwt.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: '회원가입' })
  @ApiBody({ type: RegisterUserDTO })
  async register(@Body() body: RegisterUserDTO) {
    return this.authService.createUser(body);
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인' })
  @ApiBody({ type: LoginUserDTO })
  async login(@Body() body: LoginUserDTO) {
    return this.authService.login(body);
  }

  @Get('/login')
  @ApiOperation({ summary: '로그인 조회' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async loginUser(@CurrentUser() currentUser: User) {
    return currentUser;
  }

  @Post('/oauth/google')
  @ApiOperation({ summary: '구글 로그인' })
  async googleLogin(@Body() body: GoogleLoginDTO) {
    return this.authService.googleLogin(body);
  }
}
