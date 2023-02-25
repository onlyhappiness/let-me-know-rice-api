import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/user/model/user.entity';

export class UserRegisterDTO extends PickType(UserEntity, [
  'signname',
  'password',
  'name',
  'phone',
  'email',
] as const) {}
