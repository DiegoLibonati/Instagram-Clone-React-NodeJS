import { User } from "../types/types";

export const handleRemoveNotification = (
  notifications: User["notifications"],
  username: string
) => {
  const authUserInNotification = notifications.filter(
    (notification) => notification.username === username
  );

  if (authUserInNotification.length) {
    notifications = notifications.filter(
      (notification) => notification.username !== username
    );

    return notifications;
  }

  return notifications;
};
