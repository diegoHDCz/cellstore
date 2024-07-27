import { Router } from "express";
import { teste } from "../controllers/vercelFunctions";
const vercelRouter = Router();

vercelRouter.get("/", teste);

export { vercelRouter };
