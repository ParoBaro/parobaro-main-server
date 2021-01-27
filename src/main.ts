import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('useFindAndModify', false);

  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
