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
        const {
          _id,
          notificationType,
          wasViewed,
          idProfile,
          idAuthor,
          createdAt,
          updatedAt,
        } = notification.toObject();

        const { username, name, avatar } = await getUserProperties(idAuthor!);
        return {
          _id,
          notificationType,
          wasViewed,
          idProfile,
          idAuthor,
          createdAt,
          updatedAt,
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
