import { NotificationModel } from "../models/NotificationModel";

export const handleRemoveNotification = async (
  idAuthor: string,
  idProfile: string,
  notificationType: string
) => {
  await NotificationModel.deleteOne({
    $and: [
      { idAuthor: idAuthor },
      { idProfile: idProfile },
      { notificationType: notificationType },
    ],
  });
};
