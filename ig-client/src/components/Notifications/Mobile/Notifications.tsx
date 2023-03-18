import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NotificationsContext } from "../../../contexts/Notifications/NotificationsContext";
import { NavBarMobile } from "../../NavBar/Mobile/NavBarMobile";
import { SliderFullScreen } from "../../SliderFullScreen/SliderFullScreen";
import { NotificationList } from "../NotificationList";

export const Notifications = () => {
  const { openNotifications, setOpenNotifications } =
    useContext(NotificationsContext);

  return (
    <SliderFullScreen isTrue={openNotifications}>
      <NavBarMobile
        classNameHeader={
          "flex flex-row items-center justify-start h-14 w-screen shadow-md mb-2 bg-white"
        }
        classNameNav={
          "flex flex-row items-center justify-start h-14 w-full p-2"
        }
      >
        <BsArrowLeft
          color="black"
          size={25}
          onClick={() => setOpenNotifications(false)}
        ></BsArrowLeft>
        <h2 className="ml-5 font-medium text-lg">Notificaciones</h2>
      </NavBarMobile>

      <NotificationList></NotificationList>
    </SliderFullScreen>
  );
};
