import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
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
    idProfile: {
      type: String,
      require: true,
    },
    idFollower: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const FollowModel = mongoose.model("follows", followSchema);
