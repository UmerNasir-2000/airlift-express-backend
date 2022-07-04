import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager-redis-store';

@Controller()
export class AppController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get()
  async getHello(): Promise<string> {
    const value = await this.cacheManager.get('key');
    if(value)
    return 'Hello, World!';
  }
}
