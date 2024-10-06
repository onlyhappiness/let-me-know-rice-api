import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { omit } from 'es-toolkit';
import { Model } from 'mongoose';
import { User } from 'src/user/domain/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginUserDTO } from './dto/LoginUserDto';
import { RegisterUserDTO } from './dto/RegisterUserDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

    private readonly jwtService: JwtService,

    private readonly userService: UserService,
  ) {}

  /** 회원가입  */
  async createUser(body: RegisterUserDTO) {
    const { email, password } = body;

    const userEmail = await this.userService.findUserByEmail(email);
    if (userEmail) {
      throw new BadRequestException('이미 가입한 이메일입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.userModel.create({
      ...body,
      password: hashedPassword,
    });

    return omit(user.toObject(), ['password']);
  }

  /** 로그인 */
  async login(body: LoginUserDTO) {
    const { email, password } = body;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException(
        '아이디 또는 비밀번호를 다시 확인해주세요.',
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException(
        '아이디 또는 비밀번호를 다시 확인해주세요.',
      );
    }

    const accessToken = this.jwtService.sign(body, {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    });

    return { accessToken };
  }
}
