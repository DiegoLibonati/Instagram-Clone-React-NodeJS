import mongoose from "mongoose";
import { CommentModel } from "./CommentModel";
import { LikeModel } from "./LikeModel";

const publicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    avatar: {
      type: String,
    },
    imgLink: {
      require: true,
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    likes: {
      type: Array,
      ref: LikeModel,
    },
    comments: {
      type: Array,
      ref: CommentModel,
    },
    idAuthor: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const PublicationModel = mongoose.model(
  "publications",
  publicationSchema
);
