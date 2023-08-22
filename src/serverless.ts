import * as awsLambdaFastify from '@fastify/aws-lambda';
import { createApp } from './app';

let proxy

export async function handler(event: any, context: any) {
  if (!proxy) {
    const { instance } = await createApp()
    proxy = awsLambdaFastify(instance)
  }
  
  return proxy(event, context)
}
