import { createContext, useState } from "react";
import { NotificationsContextProps, NotificationsContextT } from "../../types/types";


export const NotificationsContext = createContext<NotificationsContextT | null>(null);

export const NotificationsProvider: React.FunctionComponent<
  NotificationsContextProps
> = ({ children }) => {
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);

  return (
    <NotificationsContext.Provider
      value={{ openNotifications, setOpenNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
