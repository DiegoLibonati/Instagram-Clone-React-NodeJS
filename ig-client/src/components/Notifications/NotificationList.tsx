import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Notification as NotificationType } from "../../types/types";
import { Notification } from "./Notification";

export const NotificationList = () => {
  const { user } = useContext(AuthContext);

  console.log("Hola");

  return (
    <ul className="flex flex-col items-center justify-start w-full h-auto">
      {user.notifications?.map((notification: NotificationType) => {
        return (
          <Notification
            key={notification.id}
            idAuthor={notification.idAuthor}
            avatar={notification.avatar}
            name={notification.name}
            username={notification.username}
            type={notification.notificationType}
            idPost={notification.idPost}
          ></Notification>
        );
      })}
    </ul>
  );
};
