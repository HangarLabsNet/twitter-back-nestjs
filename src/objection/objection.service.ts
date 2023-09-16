import knex from 'knex'
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { MainModel } from './objection.model';

@Injectable()
export class ObjectionService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    const k = knex({
      client: process.env.DB_CLIENT,
      connection: process.env.DB_CONNECTION_STRING,
      pool: { min: 0, max: 10 }
    })
    MainModel.knex(k)
  }

  onModuleDestroy() {
    MainModel.knex().destroy()
  }
}
