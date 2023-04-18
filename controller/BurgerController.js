import Burger from "../model/Burger.js";

const getBurgers = async (req, res, next) => {
  const burgers = await Burger.find();
  res.json(burgers);
};

const getBurgerById = async (req, res, next) => {
  const productId = req.params.productId;
  const burger = await Burger.findById(productId);
  res.json(burger);
};

const addBurger = async (req, res, next) => {
  let burger = new Burger();
  burger.name = req.body.name;
  burger.description = req.body.description;
  burger.type = req.body.type;
  burger.price = req.body.price;
  burger.image = req.body.image;
  await burger.save();

  res.json(true);
};

export { getBurgers, addBurger, getBurgerById };
