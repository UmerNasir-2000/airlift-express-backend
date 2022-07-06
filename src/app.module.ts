import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
import { AppController } from './app.controller';
import { ClassificationModule } from './Modules/classification/classification.module';
@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_HOST,
      auth_pass: process.env.REDIS_PASSWORD,
      port: process.env.REDIS_PORT,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClassificationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
