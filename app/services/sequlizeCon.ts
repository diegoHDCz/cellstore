import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import Product from "../models/product";

import * as dotenv from 'dotenv'
dotenv.config()

const sequelizeConnection = new Sequelize(
  // database: process.env.POSTGRES_DATABASE!,
  // password: process.env.POSTGRES_PASSWORD!,
  // host: process.env.POSTGRES_HOST,
  // username: process.env.POSTGRES_USER!,
   process.env.POSTGRES_URL || "localhost",{

  dialect: "postgres",
  logging: console.log,
  models: [User,Product],
});

async () => {
  try {
    await sequelizeConnection.sync({force: true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelizeConnection;
