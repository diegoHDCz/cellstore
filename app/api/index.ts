import "reflect-metadata";

import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import dbClient from "../services/sequlizeCon";
import userRouter from "./users";
import productsRouter from "./products";
import authRouter from "./auth";
import { containsSimilarWord } from "../services/containsWord";

dotenv.config();

const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

async () => await dbClient.sync();

const authMiddleware = (req: Request, res: Response, next: Function) => {
  const publicRoutes = ["users", "products"];
  var isPublic = false;
  publicRoutes.forEach((el, i) => {
    if (isPublic) return;
    isPublic = containsSimilarWord(req.url, el);
  });

  if (isPublic) {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== "Bearer your-token") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

//app.use(authMiddleware);

app.get<{}>("/", (req, res) => {
  res.json({
    messsage: "hello from the other side",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT);

export default app;
