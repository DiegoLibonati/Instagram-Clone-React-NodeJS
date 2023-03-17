export const handleNewNotification = (
  foreignUser,
  authUser,
  notificationType
) => {
  const notifications = foreignUser.notifications;

  if (notifications.length === 20) {
    notifications.shift();
  }

  foreignUser.notifications.push({
    id: authUser._id,
    username: authUser.username,
    name: authUser.name,
    avatar: authUser.avatar,
    notificationType: notificationType,
    wasViewed: false,
  });
  return;
};
