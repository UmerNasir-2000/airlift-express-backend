import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
