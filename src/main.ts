import { ValidationException } from './filters/validation.exception';
import { ValidationFilter } from './filters/validation.filter';
import { HttpExceptionFilter } from './filters/http.filter';
import { FallbackExceptionFilter } from './filters/fallback.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Swagger
   const config = new DocumentBuilder()
    .setTitle('Paro Baro v1')
    .setDescription('ParoBaro API')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new HttpExceptionFilter(), new FallbackExceptionFilter(), new ValidationFilter())
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map(
        error => `${error.property} has the wrong value ${error.value}, ${Object.values(error.constraints).join(', ')}`
      )
      return new ValidationException(messages.toString())
    }
  }))
  mongoose.set('useFindAndModify', false);

  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
