import express from "express";
const router = express.Router();

import {
  getAccompagnements,
  addAccompagnement,
} from "../controller/AccompagnementController.js";

router.get("/get", getAccompagnements);
router.post("/post", addAccompagnement);

export default router;
