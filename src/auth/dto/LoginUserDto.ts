import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/domain/entity/user.entity';

export class LoginUserDTO extends PickType(User, [
  'email',
  'password',
] as const) {}
