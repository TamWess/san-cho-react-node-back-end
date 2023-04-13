import express from "express";
import { URL } from "./URL.js";
import axios from "axios";

const router = express.Router();
URL.burger;
const data = [
  {
    id: 1,
    name: "Michael",
    email: "Michael@yahoo.com",
  },
  {
    id: 2,
    name: "David",
    email: "David@yahoo.com",
  },
  {
    id: 3,
    name: "Jeanne",
    email: "Jeanne@yahoo.com",
  },
];

// router.get("/get", async (req, res, next) => {
//   try {
//     const newData = await [...data];
//     res.status(200).json(newData);
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/get/burger", async (req, res, next) => {
  try {
    const { data } = await axios.get(URL.burger);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/get/accompagnement", async (req, res, next) => {
  try {
    const { data } = await axios.get(URL.accompagnement);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/get/boisson", async (req, res, next) => {
  try {
    const { data } = await axios.get(URL.boisson);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});
router.get("/get/dessert", async (req, res, next) => {
  try {
    const { data } = await axios.get(URL.dessert);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
