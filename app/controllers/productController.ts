import type { VercelRequest, VercelResponse } from "@vercel/node";

import Product from "../models/product";
import { Request, Response } from "express";

class ProductController {
  async findAllProdcuts(req: Request, res: Response) {
    try {
      var products = await Product.findAll();
      return res.status(200).json({ data: products });
    } catch (err) {
      console.warn(err);
      return res.status(400).json({ error: "Was not possible " });
    }
  }
  async storeProduct(req: Request, res: Response) {
    const { name, brand, description, price } = req.body;
    const file = req.file;
    if (!name || !description || !price || !brand) {
      return res.status(400).send("Missing required fields.");
    }
    try {
      var { id } = await Product.create({
        name,
        brand,
        description,
        price,
        image: file ? file.buffer.toString("base64") : "",
      });
      return res.status(200).json({ productId: id });
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
  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { name, brand, description, price } = req.body;
    const file = req.file;

    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).send("Product not found.");
      }

      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.brand = brand || product.brand;
      product.image = file ? file.buffer.toString("base64") : product.image;

      await product.save();

      return res.status(200).send(product);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Error updating product.");
    }
  }

  async deleteProdcut(req: Request, res: Response) {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).send("Product not found.");
    }
    await product.destroy();
    return res.status(204);
  }
}

export { ProductController };
