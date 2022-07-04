import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import logger from './Utils/Logs/logger';


async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  app.use(helmet({ xssFilter: true, frameguard: false }));

  logger(app);

  await app.listen(process.env.HTTP_PORT);

}
bootstrap();
