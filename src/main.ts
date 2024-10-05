import { NestFactory } from '@nestjs/core';
import chalk from 'chalk';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // TODO: setUp Global Middleware

  // TODO: setUp API Auth

  // TODO: setUp OpenAPIMiddleware
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
