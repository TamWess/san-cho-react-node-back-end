import express from "express";
const router = express.Router();

import { getBurgers, addBurger } from "../controller/BurgerController.js";

router.get("/get", getBurgers);
router.post("/post", addBurger);

export default router;
