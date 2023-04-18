import express from "express";
const router = express.Router();

import {
  getAccompagnements,
  addAccompagnement,
  getAccompagnementById
} from "../controller/AccompagnementController.js";

router.get("/get", getAccompagnements);
router.post("/post", addAccompagnement);
router.get("/:productId", getAccompagnementById);

export default router;
