import { config } from 'dotenv';
config({ debug: true })

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { setupSwagger } from './swagger';
import  * as fastify from 'fastify'

export async function createApp(): 
  Promise<{ 
    app: NestFastifyApplication, 
    instance: fastify.FastifyInstance 
  }> {
  const instance = fastify()

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    new FastifyAdapter(instance),
    { bufferLogs: true }
  );
  app.useLogger(app.get(Logger))
  setupSwagger(app)
  
  await app.init();

  return { app, instance };
}
