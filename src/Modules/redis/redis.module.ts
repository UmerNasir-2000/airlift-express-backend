import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.registerAsync<ClientOpts>({
      useFactory: () => ({
        store: redisStore,
        host: process.env.REDIS_HOST,
        auth_pass: process.env.REDIS_PASSWORD,
        port: process.env.REDIS_PORT,
      }),
      isGlobal: true,
    }),
  ],
  providers: [RedisService],
})
export class RedisModule {}
