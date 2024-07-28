import { Router } from "express";
import { AuthController } from "../controllers/authController";

const productsRouter = Router();

const authRouter = Router();
const authController = new AuthController();
authRouter.post("/create", authController.createUser);
authRouter.post("/login", authController.signIn);
authRouter.get("/", (req,res)=>{
  return res.json({"message":"deu bom"})
});


export default authRouter;
