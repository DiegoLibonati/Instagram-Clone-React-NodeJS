import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../../pages/Auth/LoginPage/LoginPage";
import { RegisterPage } from "../../../pages/Auth/RegisterPage/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="auth/register"
        element={<RegisterPage></RegisterPage>}
      ></Route>
      <Route path="/*" element={<Navigate to="auth/login"></Navigate>}></Route>
    </Routes>
  );
};
