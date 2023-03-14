import { BsArrowLeft } from "react-icons/bs";
import { NotificationsContext } from "../../../../contexts/NotificationsContext";
import { NotificationList } from "../../../../instagram/components/Notifications/NotificationList";
import { useContext } from "react";

export const SidebarNotifications = () => {
  const { setOpenNotifications } = useContext(NotificationsContext);
  return (
    <div className='className="flex flex-col items-start justify-center w-[calc(100%-16px)] h-screen m-2 shadow-sm rounded-md'>
      <div className="flex flex-row w-full h-16 items-center justify-start p-2">
        <BsArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={() => {
            setOpenNotifications(false);
          }}
        ></BsArrowLeft>

        <h2 className="absolute right-2 font-semibold text-lg">
          Notificaciones
        </h2>
      </div>

      <NotificationList></NotificationList>
    </div>
  );
};
