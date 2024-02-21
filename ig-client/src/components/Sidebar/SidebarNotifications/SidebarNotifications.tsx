import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import { NotificationsContext } from "../../../contexts/Notifications/NotificationsContext";
import { NotificationList } from "../../Notifications/NotificationList";

export const SidebarNotifications = (): JSX.Element => {
  const notificationsContextStore = useContext(NotificationsContext);
  return (
    <div className='className="flex flex-col items-start justify-center w-[calc(100%-16px)] h-screen m-2 shadow-sm rounded-md'>
      <div className="flex flex-row w-full h-16 items-center justify-start p-2">
        <BsArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={() => {
            notificationsContextStore?.setOpenNotifications(false);
          }}
        ></BsArrowLeft>

        <h2 className="absolute right-4 font-semibold text-lg">
          Notificaciones
        </h2>
      </div>

      <NotificationList></NotificationList>
    </div>
  );
};
