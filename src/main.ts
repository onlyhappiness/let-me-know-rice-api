import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import chalk from 'chalk';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exceptions.filter';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: setUp Global Middleware
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessInterceptor());

  // TODO: setUp API Auth

  // TODO: setUp OpenAPIMiddleware
  const documentBuilder = new DocumentBuilder()
    .setTitle('let-me-know-rice')
    .setDescription('let-me-know-rice API description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('/v1/docs', app, document, {
    swaggerOptions: {
      apisSorter: 'alpha',
      operationsSorter: 'method',
      tagsSorter: 'alpha',
    },
  });

  const port = process.env.PORT;

  await app
    .listen(port)
    .then(() => {
      console.log(
        chalk.green(
          `✅ Server on ${chalk.blue(`http://localhost:${port}`)}\n`,
        ) + chalk.yellow(`startDate: ${new Date().toISOString()}`),
      );
    })
    .catch((error) => {
      console.error(chalk.red(`🆘 Server error ${error}`));
    });
}
bootstrap();
