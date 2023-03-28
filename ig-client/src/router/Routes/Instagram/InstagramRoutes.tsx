import { Navigate, Route, Routes } from "react-router-dom";
import { EditUserPage } from "../../../pages/Instagram/EditUserPage/EditUserPage";
import { ExplorePage } from "../../../pages/Instagram/ExplorePage/ExplorePage";
import { HomePage } from "../../../pages/Instagram/HomePage/HomePage";
import { NotFoundPage } from "../../../pages/Instagram/NotFoundPage/NotFoundPage";
import { ProfilePage } from "../../../pages/Instagram/ProfilePage/ProfilePage";
import { PublicationsPage } from "../../../pages/Instagram/PublicationsPage/PublicationsPage";
import { SearchPage } from "../../../pages/Instagram/SearchPage/SearchPage";

export const InstagramRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/:id" element={<ProfilePage></ProfilePage>}></Route>
      <Route
        path="/p/:id"
        element={<PublicationsPage></PublicationsPage>}
      ></Route>
      <Route path="/not-found" element={<NotFoundPage></NotFoundPage>}></Route>
      <Route path="/search-page" element={<SearchPage></SearchPage>}></Route>
      <Route
        path="/accounts/edit"
        element={<EditUserPage></EditUserPage>}
      ></Route>
      <Route path="/explore" element={<ExplorePage></ExplorePage>}></Route>
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
