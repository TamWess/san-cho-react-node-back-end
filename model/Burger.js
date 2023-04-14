import mongoose from "mongoose";
const { Schema } = mongoose;

const BurgerSchema = new Schema({
  name: {
	type: String,
	required: true
},
  description: String,
  price: mongoose.Decimal128,
  type: String,
  image: String,
}, {
	collection: 'burger'
});

const Burger = mongoose.model("Burger", BurgerSchema);

export default Burger;
