import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import { __dirname } from "./utils.js";
import viewsRouter from "./routes/views.routes.js";
import productsRouter from "./routes/products.routes.js";

const PORT = 8080;
const MONGOOSE_URL = "mongodb://127.0.0.1:27017/ecommerce";
//mongodb://127.0.0.1:27017/ecommerce
//"mongodb+srv://coder_55605:coder_55605@cluster0.ndlarik.mongodb.net" Atlas
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);

app.use("/static", express.static(`${__dirname}/public`));

try {
  await mongoose.connect(MONGOOSE_URL);
  app.listen(PORT, () => {
    console.log(`Backend activo ${PORT} conectado a base de datos`);
  });
} catch (err) {
  console.log(`No se puede conectar con base de datos (${err.message})`);
}
