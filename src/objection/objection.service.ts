import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import knex from 'knex'
import { Model } from 'objection';

@Injectable()
export class ObjectionService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    const k = knex({
      client: process.env.DB_CLIENT,
      connection: process.env.DB_CONNECTION_STRING,
      pool: { min: 0, max: 10 }
    })
    Model.knex(k)
  }

  onModuleDestroy() {
    console.log('onModuleDestroy')
    Model.knex().destroy()
  }
}
