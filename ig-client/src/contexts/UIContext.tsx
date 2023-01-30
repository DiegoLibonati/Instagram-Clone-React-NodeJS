import { createContext, useState } from "react";

interface UIContextProps {
  children: React.ReactNode;
}

export const UIContext = createContext<null | any>(null);

export const UIProvider: React.FunctionComponent<UIContextProps> = ({
  children,
}) => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
  });

  const setModalClose = (): void => {
    setModal({ ...modal, isOpen: false, type: "" });
  };

  const setModalOpen = (type: string): void => {
    return setModal({
      ...modal,
      isOpen: true,
      type: type,
    });
  };

  return (
    <UIContext.Provider value={{ modal, setModalClose, setModalOpen }}>
      {children}
    </UIContext.Provider>
  );
};
