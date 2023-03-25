import { NotificationModel } from "../models/NotificationModel";

export const handleRemoveNotification = async (
  idAuthor: string | undefined,
  idProfile: string | undefined,
  notificationType: string | undefined
) => {
  await NotificationModel.deleteOne({
    $and: [
      { idAuthor: idAuthor },
      { idProfile: idProfile },
      { notificationType: notificationType },
    ],
  });
};
