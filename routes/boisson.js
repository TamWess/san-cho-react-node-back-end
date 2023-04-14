import express from "express";
const router = express.Router();

import { getBoissons, addBoisson } from "../controller/BoissonController.js";

router.get("/get", getBoissons);
router.post("/post", addBoisson);

export default router;
