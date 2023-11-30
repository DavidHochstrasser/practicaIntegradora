import mongoose from "mongoose";

mongoose.pluralize(null); //Se usa para evitar problemas de preconfiguracion

const collection = "products"; //Tiene que coincidir la coleccion que creamos en mongodb

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: false },
  code: { type: String, required: true },
  stock: { type: Number, required: true },
});

export default mongoose.model(collection, schema);
