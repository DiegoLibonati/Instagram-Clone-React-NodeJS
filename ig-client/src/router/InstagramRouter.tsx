import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UIContext } from "../contexts/Ui/UIContext";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Loader } from "../components/Loader/Loader1/Loader";
import { ModalNewPublication } from "../components/Modal/ModalNewPublication/ModalNewPublication";
import { ModalAlert } from "../components/Modal/ModalAlert/ModalAlert";
import { InstagramRoutes } from "./Routes/Instagram/InstagramRoutes";
import { AuthRoutes } from "./Routes/Auth/AuthRoutes";

export const InstagramRouter = () => {
  const { modal, alert } = useContext(UIContext);

  const { checkAuthToken, user } = useContext(AuthContext);

  const { status } = user;

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <Loader></Loader>;
  }

  return (
    <>
      {modal.isOpen && modal.type === "newpublication" && (
        <ModalNewPublication></ModalNewPublication>
      )}
      {alert.isOpen && <ModalAlert></ModalAlert>}
      <Routes>
        {status === "authenticated" ? (
          <Route
            path="/*"
            element={<InstagramRoutes></InstagramRoutes>}
          ></Route>
        ) : (
          <Route path="/*" element={<AuthRoutes></AuthRoutes>}></Route>
        )}
      </Routes>
    </>
  );
};
