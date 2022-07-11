import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager-redis-store';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getRedisKey(key: string) {
    return await this.cacheManager.get(key);
  }

  async setRedisKey(key: string, data: object) {
    await this.cacheManager.set(key, data, { ttl: 0 });
  }

  async removeRedisKey(key: string) {
    await this.cacheManager.del(key);
  }
}
