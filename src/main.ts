import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/common/exceptions/httpExceptions.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
// import * as expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessInterceptor());

  // 스웨거 보안 설정
  // app.use(
  //   ['/docs', 'docs-json'],
  //   expressBasicAuth({
  //     challenge: true,
  //     users: {
  //       [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
  //     },
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('API 문서')
    .setDescription('License')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  // TODO: passport

  const port = process.env.PORT || 3000;

  await app.listen(port);
  // 성공하면 알려주세여!
  console.log(`listening on port: ${port}`);
}
bootstrap();
