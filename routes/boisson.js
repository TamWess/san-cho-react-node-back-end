import express from "express";
const router = express.Router();

import {
  getBoissons,
  addBoisson,
  getBoissonById,
} from "../controller/BoissonController.js";

router.get("/get", getBoissons);
router.post("/post", addBoisson);
router.get("/:productId", getBoissonById);

export default router;
