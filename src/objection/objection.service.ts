import { Injectable, OnModuleInit } from '@nestjs/common';
import knex from 'knex'
import { Model } from 'objection';


@Injectable()
export class ObjectionService implements OnModuleInit {
  onModuleInit() {
    const k = knex({
      client: process.env.DB_CLIENT,
      connection: {
        connectionString: process.env.DB_CONNECTION_STRING,
      },
      pool: { min: 0, max: 10 }
    })
    Model.knex(k)
  }
}
