export const handleRemoveNotification = (foreignUser, authUser) => {
  const authUserInNotification = foreignUser.notifications.filter(
    (notification) => notification.username === authUser.username
  );

  if (authUserInNotification.length) {
    foreignUser.notifications = foreignUser.notifications.filter(
      (notification) => notification.username !== authUser.username
    );
  }

  return;
};
