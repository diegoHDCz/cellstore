import { Router } from "express";
import { ProductController } from "../controllers/productController";

const productsRouter = Router();
const productsController = new ProductController();

productsRouter.get("/", productsController.findAllProdcuts);
productsRouter.get("/:id", productsController.findById);
productsRouter.post("/", productsController.storeProduct);

export { productsRouter };
