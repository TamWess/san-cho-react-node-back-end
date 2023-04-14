import mongoose from "mongoose";
const { Schema } = mongoose;

const AccompagnementSchema = new Schema(
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
    collection: "accompagnement",
  }
);

const Accompagnement = mongoose.model("Accompagnement", AccompagnementSchema);

export default Accompagnement;
