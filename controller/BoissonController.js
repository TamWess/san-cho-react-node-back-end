import boisson from "../model/Boisson.js";

const getBoissons = async (req, res, next) => {
  const boissons = await boisson.find();
  res.json(boissons);
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

export { getBoissons, addBoisson };
