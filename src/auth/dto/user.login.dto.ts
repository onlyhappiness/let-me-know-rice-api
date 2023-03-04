import { PickType } from '@nestjs/swagger';
import { Users } from 'src/user/model/user.entity';

export class UserLoginDTO extends PickType(Users, [
  'signname',
  'password',
] as const) {}
