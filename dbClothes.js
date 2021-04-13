import mongoose from "mongoose";

const clothesSchema = mongoose.Schema({
  id: Number,
  img: String,
  name: String,
  price: Number,
  type: String,
});

export default mongoose.model("clothes", clothesSchema);
