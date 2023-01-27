import express from "express";
import {
  addLink,
  deleteLink,
  editLink,
  getAllLinks,
  getLinkById,
  upVotePost,
} from "../controllers/links.controller.js";

const router = express.Router();

router.route("/").get(getAllLinks).post(addLink);

router
  .route("/:id")
  .post(upVotePost)
  .put(editLink)
  .get(getLinkById)
  .delete(deleteLink);

export default router;
