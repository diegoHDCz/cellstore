import {  Options } from "sequelize";
import * as dotenv from 'dotenv'


interface DatabaseConfig {
  development: Options
  test: Options
  production: Options
}
dotenv.config()
console.log('------------------------'+ process.env.POSTGRES_DATABASE)
const config: DatabaseConfig = {
  development: {
    database: process.env.POSTGRES_DATABASE!,
    password: process.env.POSTGRES_PASSWORD!,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER!,
    native: true,
    dialectOptions:{
      require: true,
      rejectUnauthorized: false
    },
    replication: false,
    dialectModulePath: 'pg',
    dialect:'postgres'
  },
  test: {
    database: process.env.POSTGRES_DATABASE!,
    password: process.env.POSTGRES_PASSWORD!,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER!,
    ssl: false,
    replication: false,
    dialectModulePath: 'pg',
    dialect:'postgres'
  },
  production: {
    database: process.env.POSTGRES_DATABASE!,
    password: process.env.POSTGRES_PASSWORD!,
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER!,
    ssl: false,
    replication: false,
    dialectModulePath: 'pg',
    dialect:'postgres',
  },
};

export default config;
