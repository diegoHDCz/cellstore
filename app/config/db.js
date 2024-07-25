const path = require('path');
const storage = path.join(__dirname, '../db/inMemory/db.sqlite');

module.exports = {
  development: {
    dialect: 'sqlite',
    storage
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory'
  },
  production: {
    url: process.env.POSTGRES_URL,
    dialect: 'postgres'
  },

}

