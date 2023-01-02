import express from "express";
import {
  addLink,
  editLink,
  getAllLinks,
  getLinkById,
} from "../controllers/links.controller.js";

const router = express.Router();

router
  .get("/", getAllLinks)
  .put("/:id", editLink)
  .get("/:id", getLinkById)
  .post("/", addLink);

export default router;
