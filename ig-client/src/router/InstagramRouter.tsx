import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UIContext } from "../contexts/Ui/UIContext";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Loader } from "../components/Loader/Loader1/Loader";
import { ModalNewPublication } from "../components/Modal/ModalNewPublication/ModalNewPublication";
import { ModalAlert } from "../components/Modal/ModalAlert/ModalAlert";
import { InstagramRoutes } from "./Routes/Instagram/InstagramRoutes";
import { AuthRoutes } from "./Routes/Auth/AuthRoutes";

export const InstagramRouter = (): JSX.Element => {
  const uiContextStore = useContext(UIContext);

  const authContextStore = useContext(AuthContext);

  useEffect(() => {
    authContextStore?.checkAuthToken();
    // eslint-disable-next-line
  }, []);

  if (authContextStore?.user?.status === "checking") {
    return <Loader></Loader>;
  }

  return (
    <>
      {uiContextStore?.modal.isOpen && uiContextStore?.modal.type === "newpublication" && (
        <ModalNewPublication></ModalNewPublication>
      )}
      {uiContextStore?.alert.isOpen && <ModalAlert></ModalAlert>}
      <Routes>
        {authContextStore?.user?.status  === "authenticated" ? (
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
