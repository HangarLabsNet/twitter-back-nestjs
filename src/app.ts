import { config } from 'dotenv';
config({ debug: true })

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';
import { FastifyInstance } from 'fastify';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

export async function createApp(): 
  Promise<{ 
    app: NestFastifyApplication, 
    instance: FastifyInstance
  }> {
    
  const fastifyAdapter = new FastifyAdapter()
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    fastifyAdapter,
    { bufferLogs: true }
  );

  app.useLogger(app.get(Logger))

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  setupSwagger(app)
  
  await app.init();

  return { app, instance: fastifyAdapter.getInstance() };
}
