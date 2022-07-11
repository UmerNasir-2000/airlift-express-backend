import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import logger from './Utils/Logs/logger';
import { Client } from 'pg';
import { RedisService } from './Modules/redis/redis.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  const redisService = app.get(RedisService);

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  client.connect(async function (err, client, done) {
    if (err) throw err;
    console.log('Connected!');
    client.on('notification', function (msg: { payload: string }) {
      const table = JSON.parse(msg.payload).table;
      redisService.removeRedisKey(table);
    });

    await client.query('LISTEN table_update');
  });

  app.use(helmet({ xssFilter: true, frameguard: false }));

  app.setGlobalPrefix('api');

  logger(app);

  await app.listen(process.env.HTTP_PORT);
}
bootstrap();
