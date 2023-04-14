import mongoose from "mongoose";
const { Schema } = mongoose;

const DessertSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: mongoose.Decimal128,
    type: String,
    image: String,
  },
  {
    collection: "dessert",
  }
);

const Dessert = mongoose.model("Dessert", DessertSchema);

export default Dessert;
