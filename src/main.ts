import { config } from 'dotenv';
config({ debug: true })

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter(),
    { bufferLogs: true }
  );
  app.useLogger(app.get(Logger))
  setupSwagger(app)

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

