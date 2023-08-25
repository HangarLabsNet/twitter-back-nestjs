const dotenv = require('dotenv')
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: process.env.DB_CLIENT,
  connection: process.env.DB_CONNECTION_STRING,
  pool: {
    min: 0,
    max: 10
  },
  migrations: {
    tableName: '_knex_migrations',
    directory: 'knex/migrations'
  },
  seeds: {
    directory: 'knex/seeds'
  }
}
