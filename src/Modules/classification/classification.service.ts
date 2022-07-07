import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cache } from 'cache-manager-redis-store';

@Injectable()
export class ClassificationService {
  constructor(private readonly prismaService: PrismaService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async fetchClassifications() {
    const classificationsRedisResponse = await this.cacheManager.get('classifications');
    if (classificationsRedisResponse) return classificationsRedisResponse;

    const classifications = await this.prismaService.classifications.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    await this.cacheManager.set('classifications', classifications, { ttl: 0 });
    return classifications
  }
}
