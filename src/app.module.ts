import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';
import { AppController } from './app.controller';
@Module({
  imports: [CacheModule.register<ClientOpts>({
    store: redisStore,

    // Store-specific configuration:
    host: 'redis-13047.c13.us-east-1-3.ec2.cloud.redislabs.com',
    auth_pass: '8nR64FkfEuBAa6scxvNpSEPjZoYl76SG',
    port: 13047,
  }),ConfigModule.forRoot({
    isGlobal: true
  }),],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
