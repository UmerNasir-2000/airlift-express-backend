import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class ClassificationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  async fetchClassifications() {
    const classificationsRedisResponse = await this.redisService.getRedisKey(
      'classifications',
    );
    if (classificationsRedisResponse) return classificationsRedisResponse;

    const classifications = await this.prismaService.classifications.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    await this.redisService.setRedisKey('classifications', classifications);
    return classifications;
  }
}
