import { Router } from "express";
import ProductManager from "../controllers/productManager.mdb.js";

const router = Router();

const productManager = new ProductManager();

router.get("/products", async (req, res) => {
  let allProducts = await productManager.getProducts();
  res.render("products", {
    title: "Listado de Productos | Handlebars",
    products: allProducts,
  });
});

export default router;
