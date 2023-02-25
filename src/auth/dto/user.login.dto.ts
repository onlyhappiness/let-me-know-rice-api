import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/user/model/user.entity';

export class UserLoginDTO extends PickType(UserEntity, [
  'signname',
  'password',
] as const) {}
