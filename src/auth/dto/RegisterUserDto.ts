import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/domain/entity/user.entity';

export class RegisterUserDTO extends PickType(User, [
  'method',
  // 'account',
  'email',
  'password',
] as const) {}
