import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/model/user.entity';

export class UserLoginDTO extends PickType(User, [
  'signname',
  'password',
] as const) {}
