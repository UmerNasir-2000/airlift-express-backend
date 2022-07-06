import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import logger from './Utils/Logs/logger';
import { Client } from 'pg';

async function bootstrap() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  client.connect(async function (err, client, done) {
    if (err) throw err;
    console.log('Connected!');
    client.on('notification', function (msg) {
      console.log(msg);
    });

    const query = await client.query('LISTEN update_notification');
    console.log('query', query);
  });

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.use(helmet({ xssFilter: true, frameguard: false }));

  logger(app);

  await app.listen(process.env.HTTP_PORT);
}
bootstrap();
