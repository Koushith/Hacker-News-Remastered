import express from "express";
import {
  addLink,
  deleteLink,
  editLink,
  getAllLinks,
  getLinkById,
} from "../controllers/links.controller.js";

const router = express.Router();

router
  .get("/", getAllLinks)
  .put("/:id", editLink)
  .get("/:id", getLinkById)
  .post("/", addLink)
  .delete("/:id", deleteLink);

export default router;
