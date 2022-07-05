import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ClassificationModule } from './Modules/classification/classification.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  ClassificationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
