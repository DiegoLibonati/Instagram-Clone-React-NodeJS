import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
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
      <Route path="/not-found" element={<NotFoundPage></NotFoundPage>}></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
