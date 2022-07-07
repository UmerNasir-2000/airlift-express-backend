import { CacheModule, Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { PrismaService } from 'src/prisma.service';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';

@Module({
  imports: [CacheModule.register<ClientOpts>({
    store: redisStore,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASSWORD,
    port: process.env.REDIS_PORT,
  })],
  controllers: [ClassificationController],
  providers: [ClassificationService, PrismaService],
})
export class ClassificationModule {}
