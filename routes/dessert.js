import express from "express";
const router = express.Router();

import {
  getDesserts,
  addDessert,
  getDessertById,
} from "../controller/DessertController.js";

router.get("/get", getDesserts);
router.post("/post", addDessert);
router.get("/:productId", getDessertById);

export default router;
