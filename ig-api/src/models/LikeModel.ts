import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
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
    idPost: {
      type: String,
      require: true,
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

export const LikeModel = mongoose.model("likes", likeSchema);
