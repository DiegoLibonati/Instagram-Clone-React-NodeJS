export const areThereNotifications = (
  notifications: Record<string, string | boolean>[]
) => {
  const areThereNotifications = notifications.filter(
    (notification: Record<string, string | boolean>) =>
      notification.wasViewed === false
  );

  return areThereNotifications;
};
