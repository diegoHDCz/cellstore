import { Router } from "express";
import { ProductController } from "../controllers/productController";

import multer from "multer";
const productsRouter = Router();
const productsController = new ProductController();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

productsRouter.get("/", productsController.findAllProdcuts);
productsRouter.get("/:id", productsController.findById);
productsRouter.post(
  "/",
  upload.single("image"),
  productsController.storeProduct
);
productsRouter.put(
  "/:id",
  upload.single("image"),
  productsController.updateProduct
);
productsRouter.delete("/:id", productsController.deleteProdcut);

export default productsRouter;
