import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
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
    },
    notificationType: {
      type: String,
      require: true,
    },
    wasViewed: {
      type: Boolean,
      require: true,
    },
    idProfile: {
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

export const NotificationModel = mongoose.model(
  "notifications",
  notificationSchema
);
