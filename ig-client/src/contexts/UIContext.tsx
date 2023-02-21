import { createContext, useEffect, useState } from "react";
import { MAlert, Modal } from "../types/types";

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
    message: "",
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
    setAlert({ isOpen: false, type: "", message: "" });
  };

  const setAlertOpen = (type: string, message: string): void => {
    return setAlert({
      ...alert,
      isOpen: true,
      type: type,
      message: message,
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
      }, 600000);

      return () => clearTimeout(timeoutAlert);
    }
  }, [alert]);

  return (
    <UIContext.Provider
      value={{
        modal,
        previewSrc,
        alert,
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
