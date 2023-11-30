// import { Router } from "express";

// const router = Router();

// export default router;

//////////////////////////////////////////////////

import { Router } from "express";
import ProductManager from "../controllers/productManager.mdb.js"; //Esto se puede cambiar por el productManager.js para utilizar nuestra clase.

const ProductRouter = Router();
const productManager = new ProductManager();

ProductRouter.get("/", async (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!limit) {
    return res.status(200).send(await productManager.getProducts());
  }
  const allProducts = await productManager.getProducts();
  const productsLimit = allProducts.slice(0, limit);
  res.send(productsLimit);
});

ProductRouter.get("/:pid", async (req, res) => {
  const pid = parseInt(req.params.pid);
  if (!pid) {
    return res.send("El producto no existe");
  }
  const allProducts = await productManager.getProducts(id);
  const productsById = allProducts.find((product) => product.id === pid);
  res.send(productsById);
});

ProductRouter.post("/", async (req, res) => {
  let newProduct = req.body;
  res.send(await productManager.addProduct(newProduct));
});

ProductRouter.put("/:pid", async (req, res) => {
  let id = parseInt(req.params.pid);
  let updateProduct = req.body;
  try {
    await productManager.updateProduct(id, updateProduct);
    res.send(`Producto con ID ${id} se ha cargado correctamente.`);
  } catch (error) {
    res.status(404).send(`No se encontro el producto con el ID ${id}`);
  }
});

ProductRouter.delete("/:id", async (req, res) => {
  let id = req.params.id;
  res.send(await productManager.deleteProduct(id));
});

export default ProductRouter;
