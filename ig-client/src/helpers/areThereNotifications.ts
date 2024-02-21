import { Notification } from "../types/types";

export const areThereNotifications = (notifications: Notification[]) => {
  const areThereNotifications = notifications.filter(
    (notification: Notification) => notification.wasViewed === false
  );

  return areThereNotifications;
};
