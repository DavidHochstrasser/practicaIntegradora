/////////////////////////////////////////////////////////

//FileSystem Profe Carlos

import productModel from "../models/product.model.js"; //No es necesario importar mongoose porque ya lo importamos en product.model;

class ProductManager {
  constructor() {}

  async addProduct(product) {
    try {
      await productModel.create(product);
      return "Producto agregado";
    } catch (err) {
      return err.message;
    }
  }

  async getProducts() {
    try {
      const products = await productModel.find().lean(); //lean limpia el objeto y queda nativo javascript mongoo por ahi devuelve en otra codificacion
      return products;
    } catch (err) {
      return err.message;
    }
  }

  async getProduct(id) {
    try {
      const product = await productModel.findById(id);
      return product === null ? "No se encuentra el producto" : product; //if ternario
    } catch (err) {
      return err.message;
    }
  }

  async updateProduct(id, newContent) {
    try {
      const procedure = await productModel.findByIdAndUpdate(id, newContent);
      return procedure;
    } catch (err) {
      return err.message;
    }
  }

  async deleteProduct(id) {
    try {
      const procedure = await productModel.findByIdAndDelete(id);
      return procedure;
    } catch (err) {
      return err.message;
    }
  }
}
export default ProductManager;
