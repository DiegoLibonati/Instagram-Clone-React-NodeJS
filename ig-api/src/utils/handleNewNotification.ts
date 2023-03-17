import { User } from "../types/types";

export const handleNewNotification = (
  notifications: User["notifications"],
  username: string,
  name: string,
  avatar: string,
  notificationType: string
) => {
  if (notifications.length === 20) {
    notifications.shift();
  }

  notifications.push({
    username: username,
    name: name,
    avatar: avatar,
    notificationType: notificationType,
    wasViewed: false,
  });
  return notifications;
};
