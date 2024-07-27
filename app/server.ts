import "reflect-metadata";

import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";

import dbClient from "./services/sequlizeCon";
import { userRouter } from "./routes/userRoutes";
import { productsRouter } from "./routes/productRoutes";

dotenv.config();
const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Deu bom isso aqui");
});

async () => await dbClient.sync();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productsRouter);

app.listen(PORT);

export default app