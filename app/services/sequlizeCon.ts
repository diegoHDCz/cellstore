import { Options, Sequelize } from "sequelize";
import config from "../config/db";
import sequelize from "sequelize";

const nodeEnv = process.env.NODE_ENV ?? "development";
var opts: Options;
if (nodeEnv === "production") {
  opts = config.production;
} else if (nodeEnv === "test") {
  opts = config.test;
} else {
  opts = config.development;
}
const connection = new Sequelize(opts);
console.log(opts)
const testConnecton = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
console.log("---------------test successfully")
  testConnecton();
};

export default connection;
