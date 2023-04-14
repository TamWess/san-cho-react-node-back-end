import Dessert from "../model/Dessert.js";

const getDesserts = async (req, res, next) => {
  const desserts = await Dessert.find();
  res.json(desserts);
};

const addDessert = async (req, res, next) => {
  let dessert = new Dessert();
  dessert.name = req.body.name;
  dessert.description = req.body.description;
  dessert.type = req.body.type;
  dessert.price = req.body.price;
  dessert.image = req.body.image;
  await dessert.save();

  res.json(true);
};

export { getDesserts, addDessert };
