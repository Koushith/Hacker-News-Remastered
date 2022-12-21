import mongoose from "mongoose";
import { User } from "./user.model.js";

const LinksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    upVotes: Number,
    tags: [mongoose.Schema.Types.Mixed],
    discussions: {
      comments: [
        {
          user: [{ type: mongoose.Schema.ObjectId, ref: User }],
          comment: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const Link = mongoose.model("Link", LinksSchema);
