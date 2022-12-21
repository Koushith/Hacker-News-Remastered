import express from "express";
import {
  addLink,
  getAllLinks,
  getLinkById,
} from "../controllers/links.controller.js";

const router = express.Router();

router.get("/", getAllLinks).get("/:id", getLinkById).post("/", addLink);

export default router;
