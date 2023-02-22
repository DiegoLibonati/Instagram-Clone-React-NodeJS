import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";
import { PublicationsPage } from "../pages/PublicationsPage";

export const InstagramRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/:id" element={<ProfilePage></ProfilePage>}></Route>
      <Route
        path="/p/:profilePublicationsId"
        element={<PublicationsPage></PublicationsPage>}
      ></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
