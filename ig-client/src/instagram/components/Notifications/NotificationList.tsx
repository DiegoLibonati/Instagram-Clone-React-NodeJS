import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Notification } from "./Notification";

export const NotificationList = () => {
  const { user } = useContext(AuthContext);

  console.log("Hola");

  return (
    <ul className="flex flex-col items-center justify-start w-full h-auto">
      {user.notifications?.map((notification: Record<string, string>) => {
        return (
          <Notification
            key={notification.id}
            avatar={notification.avatar}
            name={notification.name}
            username={notification.username}
            type={notification.notificationType}
          ></Notification>
        );
      })}
    </ul>
  );
};
