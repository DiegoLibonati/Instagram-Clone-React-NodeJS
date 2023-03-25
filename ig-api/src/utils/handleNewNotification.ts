import { NotificationModel } from "../models/NotificationModel";

export const handleNewNotification = async (
  idAuthor: string | undefined,
  idProfile: string | undefined,
  notificationType: string | undefined,
  idPost?: string | undefined
) => {
  if (idAuthor === idProfile) return;

  const notifications = await NotificationModel.find({ idProfile: idProfile });

  if (notifications.length === 20) {
    const notification = await NotificationModel.find({ idProfile: idProfile })
      .sort({ field: "asc", _id: -1 })
      .limit(1);

    await NotificationModel.deleteOne({ id: notification[0].id });
  }

  const notification = new NotificationModel({
    idAuthor: idAuthor,
    idProfile: idProfile,
    notificationType: notificationType,
    wasViewed: false,
    idPost: idPost ? idPost : "",
  });

  return await notification.save();
};
