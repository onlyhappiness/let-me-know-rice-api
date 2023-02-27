import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/model/user.entity';

export class UserRegisterDTO extends PickType(User, [
  'signname',
  'password',
  'name',
  'phone',
  'email',
] as const) {}
