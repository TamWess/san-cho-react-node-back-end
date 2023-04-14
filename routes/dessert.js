import express from "express";
const router = express.Router();

import { getDesserts, addDessert } from "../controller/DessertController.js";

router.get("/get", getDesserts);
router.post("/post", addDessert);

export default router;
