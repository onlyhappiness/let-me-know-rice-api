import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

// import Joi from 'joi';
// TODO: joi

// const typeOrmModuleOptions = {
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => ({
//     namingStrategy: new SnakeNamingStrategy(),
//     type: 'postgres',
//     host: configService.get('DB_HOST'), // process.env.DB_HOST
//     port: configService.get('DB_PORT'),
//     username: configService.get('DB_USERNAME'),
//     password: configService.get('DB_PASSWORD'),
//     database: configService.get('DB_NAME'),
//     // entities: [UserEntity]
//     synchronize: false, //FIXME: 주의!!
//     autoLoadEntities: true,
//     logging: false,
//     keepConnectionAlive: true,
//   }),
//   inject: [ConfigService],
// };

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'), // process.env.DB_HOST
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        synchronize: true, // TODO: 주의! production에서는 false로
        autoLoadEntities: true,
        logging: true, // TODO: 주의! production에서는 false로
        keepConnectionAlive: true,
      }),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
