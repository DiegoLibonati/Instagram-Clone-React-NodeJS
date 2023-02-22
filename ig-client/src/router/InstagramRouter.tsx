import { Route, Routes } from "react-router-dom";
import { UIContext } from "../contexts/UIContext";
import { ModalNewPublication } from "../ui/components/modal/modalnewpublication/ModalNewPublication";
import { useContext, useEffect } from "react";
import { ModalAlert } from "../ui/components/modal/modalalert/ModalAlert";
import { AuthContext } from "../contexts/AuthContext";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { InstagramRoutes } from "../instagram/routes/InstagramRoutes";
import { Loader } from "../ui/components/loader/Loader";

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
