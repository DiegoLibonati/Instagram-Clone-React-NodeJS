import { useEffect, useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileActions } from "./ProfileActions";
import { useProfileUser } from "../../hooks/useProfileUser";
import { UIContext } from "../../contexts/Ui/UIContext";
import { ProfileContext } from "../../contexts/Profile/ProfileContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useMediaMatch } from "../../hooks/useMediaMatch";
import { instagramApiGetUser } from "../../api/User/instagramApiGetUser";
import { instagramApiSetRecentUserSearch } from "../../api/Search/instagramApiSetRecentUserSearch";
import { MenuConfigMobile } from "../MenuConfig/Mobile/MenuConfigMobile";
import { PublicationImages } from "../PublicationsImages/PublicationImages";

export const Profile = (): JSX.Element => {
  const { id: urlUsername } = useParams();
  const uiContextStore = useContext(UIContext);
  const profileContextStore = useContext(ProfileContext);
  const authContextStore = useContext(AuthContext);
  const { user, isMainUser } = useProfileUser();
  const { matchMediaQuery } = useMediaMatch(1024);
  const navigate = useNavigate();

  const getProfileUser = useCallback(async () => {
    const foreignRequest = await instagramApiGetUser(urlUsername!);
    const authRequest = await instagramApiSetRecentUserSearch(urlUsername!);
    if (foreignRequest.hasOwnProperty("response")) {
      uiContextStore?.setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        foreignRequest.response.data.message,
        "bg-red-600"
      );
      return navigate("/not-found");
    }

    const foreignUserData = foreignRequest.payload;
    const idsRecentSearched = authRequest.payload;

    profileContextStore?.setUserForeignProfile(foreignUserData);

    if (idsRecentSearched) {
      authContextStore?.onLogin({
        ...authContextStore?.user,
        recentUsers: user.recentUsers
          ? [...user.recentUsers!, ...idsRecentSearched]
          : [idsRecentSearched],
      });
    }
    // eslint-disable-next-line
  }, [
    navigate,
    uiContextStore?.setAlertOpen,
    profileContextStore?.setUserForeignProfile,
    urlUsername,
  ]);

  useEffect(() => {
    if (!isMainUser) {
      getProfileUser();
    }
  }, [urlUsername, getProfileUser, isMainUser]);

  return (
    <>
      {!matchMediaQuery && <MenuConfigMobile></MenuConfigMobile>}

      <main className="flex items-start justify-start flex-col w-full h-full pt-14 overflow-x-hidden lg:overflow-x-visible lg:w-[80%] lg:absolute lg:right-0 lg:px-20 2xl:px-40 lg:pt-5 lg:items-center">
        <ProfileHeader></ProfileHeader>
        <ProfileActions></ProfileActions>
        <PublicationImages
          publications={user?.publications}
        ></PublicationImages>
      </main>
    </>
  );
};
