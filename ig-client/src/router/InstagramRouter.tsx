import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";

export const InstagramRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/auth/register"
        element={<RegisterPage></RegisterPage>}
      ></Route>
    </Routes>
  );
};
