import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ClassificationModule } from './Modules/classification/classification.module';
import { RedisModule } from './Modules/redis/redis.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClassificationModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
