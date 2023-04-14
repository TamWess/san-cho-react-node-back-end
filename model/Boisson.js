import mongoose from "mongoose";
const { Schema } = mongoose;

const BoissonSchema = new Schema(
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
    collection: "boisson",
  }
);

const Boisson = mongoose.model("Boisson", BoissonSchema);

export default Boisson;
