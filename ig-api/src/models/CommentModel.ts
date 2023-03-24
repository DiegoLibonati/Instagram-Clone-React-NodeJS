import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
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
    description: {
      type: String,
    },
    date: {
      type: Date,
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

export const CommentModel = mongoose.model("comments", commentSchema);
