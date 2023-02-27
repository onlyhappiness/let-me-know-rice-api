import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/model/user.entity';
import { Repository } from 'typeorm';
import { UserRegisterDTO } from '../dto/user.register.dto';
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from '../dto/user.login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findUserById(signname: string) {
    const user = await this.userRepository.findOne({
      where: { signname },
    });
    if (!user) throw new Error();

    const { password, ...withoutPassword } = user;

    return withoutPassword;
  }

  //** 회원가입 */
  async createUser(body: UserRegisterDTO) {
    const { signname, password, name, phone, email } = body;

    const duplicateUser = await this.userRepository.findOne({
      where: { signname },
    });
    if (duplicateUser) {
      throw new UnauthorizedException('이미 사용중인 아이디입니다.');
    }

    const duplicatePhone = await this.userRepository.findOne({
      where: { phone },
    });
    if (duplicatePhone) {
      throw new UnauthorizedException(
        '해당 핸드폰 번호가 이미 등록되어 있습니다.',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.userRepository.save({
      ...body,
      password: hashedPassword,
    });

    const { password: userPassword, ...withoutPassword } = user;

    return withoutPassword;
  }

  //** 로그인 */
  async login(body: UserLoginDTO) {
    const { signname, password } = body;

    const user = await this.userRepository.findOne({
      where: { signname },
    });
    if (!user) {
      throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요.');
    }

    const isPasswordValidated = await bcrypt.compare(password, user.password);
    if (!isPasswordValidated) {
      throw new UnauthorizedException('아이디와 비밀번호를 확인해주세요.');
    }

    const access_token = this.jwtService.sign(body, {
      secret: process.env.JWT_ACESS_TOKEN_SECRET,
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
    });

    return {
      access_token,
    };
  }
}
