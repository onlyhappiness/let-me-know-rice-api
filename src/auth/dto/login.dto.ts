import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/domain/user.entity';

export class LoginRequestDto extends PickType(User, [
  'signname',
  'password',
] as const) {}
