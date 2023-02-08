import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { HomePage } from "../instagram/pages/HomePage";
import { ProfilePage } from "../instagram/pages/ProfilePage";
import { PublicationsPage } from "../instagram/pages/PublicationsPage";

export const InstagramRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/auth/register"
        element={<RegisterPage></RegisterPage>}
      ></Route>

      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/:profile" element={<ProfilePage></ProfilePage>}></Route>
      <Route
        path="/:profile/:profilePublicationsId"
        element={<PublicationsPage></PublicationsPage>}
      ></Route>
      <Route path="/*" element={<HomePage></HomePage>}></Route>
    </Routes>
  );
};
