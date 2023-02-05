import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserRepository } from './infra/user.repository';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
