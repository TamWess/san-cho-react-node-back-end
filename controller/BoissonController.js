import Boisson from "../model/Boisson.js";

const getBoissons = async (req, res, next) => {
  const boissons = await Boisson.find();
  res.json(boissons);
};

const getBoissonById = async (req, res, next) => {
  const productId = req.params.productId;
  const boisson = await Boisson.findById(productId);
  res.json(boisson);
};

const addBoisson = async (req, res, next) => {
  let boisson = new boisson();
  boisson.name = req.body.name;
  boisson.description = req.body.description;
  boisson.type = req.body.type;
  boisson.price = req.body.price;
  boisson.image = req.body.image;
  await boisson.save();

  res.json(true);
};

export { getBoissons, addBoisson, getBoissonById };
