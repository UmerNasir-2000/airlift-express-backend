import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { PrismaService } from 'src/prisma.service';
import { RedisModule } from '../redis/redis.module';
import { RedisService } from '../redis/redis.service';

@Module({
  imports: [RedisModule],
  controllers: [ClassificationController],
  providers: [ClassificationService, PrismaService, RedisService],
})
export class ClassificationModule {}
