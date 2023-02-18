import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: setUpGlobalMiddleware
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessInterceptor());

  // TODO: setUpBasicAuth

  // TODO: setUpOpenAPIMiddleware
  const config = new DocumentBuilder()
    .setTitle('Let-Me-Know-Rice-Server')
    .setDescription('밥 줘 API')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 4000;

  await app
    .listen(port)
    .then(() => {
      console.log(
        `✅ Server on http://localhost:${port}`,
        // `✅ Server on http://localhost:${port}\nstartDate: ${new Date().toISOString()}`,
      );
    })
    .catch((error) => {
      console.error(`🆘 Server error ${error}`);
    });
}
bootstrap();
