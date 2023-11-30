import mongoose from "mongoose";

mongoose.pluralize(null);

const collection = "carts";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: false },
});

export default mongoose.model(collection, schema);
