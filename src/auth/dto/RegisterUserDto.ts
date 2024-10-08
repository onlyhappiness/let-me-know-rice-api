import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/domain/entity/user.entity';

export class RegisterUserDTO extends PickType(User, [
  'method',
  'email',
  'password',
  'name',
  'nickname',
] as const) {}
