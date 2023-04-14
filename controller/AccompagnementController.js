import Accompagnement from "../model/Accompagnement.js";

const getAccompagnements = async (req, res, next) => {
  const accompagnements = await Accompagnement.find();
  res.json(accompagnements);
};

const addAccompagnement = async (req, res, next) => {
  let accompagnement = new Accompagnement();
  accompagnement.name = req.body.name;
  accompagnement.description = req.body.description;
  accompagnement.type = req.body.type;
  accompagnement.price = req.body.price;
  accompagnement.image = req.body.image;
  await accompagnement.save();

  res.json(true);
};

export { getAccompagnements, addAccompagnement };
