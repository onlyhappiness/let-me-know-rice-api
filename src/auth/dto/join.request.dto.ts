import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/domain/user.entity';

export class JoinRequestDto extends PickType(User, [
  'signname',
  'password',
  'name',
  'email',
] as const) {}
