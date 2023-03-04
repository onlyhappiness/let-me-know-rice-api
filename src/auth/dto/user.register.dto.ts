import { PickType } from '@nestjs/swagger';
import { Users } from 'src/user/model/user.entity';

export class UserRegisterDTO extends PickType(Users, [
  'signname',
  'password',
  'name',
  'phone',
  'email',
] as const) {}
