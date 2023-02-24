import { createContext, useEffect, useState } from "react";
import { MAlert, MConfig, Modal } from "../types/types";

interface UIContextProps {
  children: React.ReactNode;
}

export const UIContext = createContext<null | any>(null);

export const UIProvider: React.FunctionComponent<UIContextProps> = ({
  children,
}) => {
  const [modal, setModal] = useState<Modal>({
    isOpen: false,
    type: "",
  });
  const [alert, setAlert] = useState<MAlert>({
    isOpen: false,
    type: "",
    title: "",
    message: "",
    color: "",
  });
  const [menuConfig, setMenuConfig] = useState<MConfig>({
    isOpen: false,
  });
  const [previewSrc, setPreviewSrc] = useState<string>("");

  const setModalClose = (): void => {
    setModal({ ...modal, isOpen: false, type: "" });
    setPreviewSrc("");
  };

  const setModalOpen = (type: string): void => {
    return setModal({
      ...modal,
      isOpen: true,
      type: type,
    });
  };

  const setAlertClose = (): void => {
    setAlert({ isOpen: false, type: "", message: "", title: "", color: "" });
  };

  const setAlertOpen = (
    type: string,
    title: string,
    message: string,
    color: string
  ): void => {
    return setAlert({
      ...alert,
      isOpen: true,
      type: type,
      title: title,
      message: message,
      color: color,
    });
  };

  const setMenuConfigClose = (): void => {
    setMenuConfig({ isOpen: false });
  };

  const setMenuConfigOpen = (): void => {
    return setMenuConfig({
      ...menuConfig,
      isOpen: true,
    });
  };

  // UseEffects

  useEffect(() => {
    if (modal.isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [modal]);

  useEffect(() => {
    const { isOpen } = alert;

    if (isOpen) {
      const timeoutAlert = setTimeout(() => {
        setAlertClose();
      }, 4000);

      return () => clearTimeout(timeoutAlert);
    }
  }, [alert]);

  return (
    <UIContext.Provider
      value={{
        modal,
        previewSrc,
        alert,
        menuConfig,
        setMenuConfigClose,
        setMenuConfigOpen,
        setPreviewSrc,
        setModalClose,
        setModalOpen,
        setAlertClose,
        setAlertOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
