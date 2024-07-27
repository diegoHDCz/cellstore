import { Request, Response } from "express";

import Product from "../models/product";

interface ProductStoreProps {
  brand: string;
  name: string;
  description: string;
  price: number;
}

class ProductController {
  async findAllProdcuts(res: Response) {
    try {
      var products = await Product.findAll();
      return res.status(200).json(products);
    } catch (err) {
      console.warn(err);
      return res.status(400).json({ error: "Was not possible " });
    }
  }
  async storeProduct(req: Request, res: Response) {
    var data: ProductStoreProps = req.body;
    try {
      var { id } = await Product.create(data);
      return res.status(200).send(`product Id ${id}`);
    } catch (err) {
      console.warn(err);
      return res.status(400).json({ error: "Error creating " + err });
    }
  }
  async findById(req: Request, res: Response) {
    var { id } = req.params;
    try {
      var product = await Product.findOne({ where: { id } });
      return res.status(200).send(product);
    } catch (err) {
      console.warn(err);
      return res.status(400).json({ error: "Error finding " + err });
    }
  }
}

export { ProductController };
