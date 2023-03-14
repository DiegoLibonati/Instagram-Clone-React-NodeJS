import { createContext, useState } from "react";

interface NotificationsContextProps {
  children: React.ReactNode;
}

export const NotificationsContext = createContext<null | any>(null);

export const NotificationsProvider: React.FunctionComponent<
  NotificationsContextProps
> = ({ children }) => {
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <NotificationsContext.Provider
      value={{ openNotifications, setOpenNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
