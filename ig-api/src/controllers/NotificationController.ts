import { NewRequest } from "../types/types";
import { Response } from "express";
import { NotificationModel } from "../models/NotificationModel";
import { getUserProperties } from "../utils/getUserProperties";

export const Notification = {
  editNotifications: async (req: NewRequest, res: Response) => {
    const { id } = req.user;

    await NotificationModel.updateMany(
      { $and: [{ idProfile: id }, { wasViewed: false }] },
      { wasViewed: true }
    );

    const notifications = await NotificationModel.find({ idProfile: id });

    const finalNotifications = await Promise.all(
      notifications.map(async (notification) => {
        const { username, name, avatar } = await getUserProperties(
          notification.toObject().idAuthor!
        );
        return {
          ...notification.toObject(),
          username,
          name,
          avatar,
        };
      })
    );

    res.status(201).json({
      notifications: finalNotifications,
    });
  },
};
