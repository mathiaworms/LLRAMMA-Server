import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors'; // Importer cors depuis le module cors

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use('/gpt2', express.static(path.join(__dirname, '..', 'public', 'gpt2')));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
