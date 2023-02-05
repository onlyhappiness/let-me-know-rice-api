import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(private readonly connection: Connection) {}

  // TODO: 회원 체크

  // TODO: 중복 체크
}
