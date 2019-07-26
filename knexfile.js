const dotenv = require('dotenv').config()

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

// Update with your config settings.
module.exports = {
  development: {
    client: 'postgres',
    connection,
  },

  staging: {
    client: 'postgres',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },

  production: {
    client: 'postgres',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  }
}
