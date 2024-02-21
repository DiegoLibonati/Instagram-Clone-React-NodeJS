import { useContext } from "react";
import { instagramApiGetFollow } from "../api/Follow/instagramApiGetFollow";
import { instagramApiGetUnFollow } from "../api/Follow/instagramApiGetUnFollow";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { ProfileContext } from "../contexts/Profile/ProfileContext";
import { UIContext } from "../contexts/Ui/UIContext";
import { UseFollow } from "../types/types";

export const useFollow = (): UseFollow => {
  const uiContextStore = useContext(UIContext);
  const authContextT = useContext(AuthContext);
  const profileContextT = useContext(ProfileContext);

  const handleFollow = async (idAuthorNotification?: string) => {
    const request = await instagramApiGetFollow(
      idAuthorNotification || profileContextT?.userForeignProfile.id!
    );

    if (request.hasOwnProperty("response")) {
      return uiContextStore?.setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const following = request.payload;
    const followers = request.payloadForeignUser;
    authContextT?.onLogin({ ...authContextT?.user, ...following });
    profileContextT?.setUserForeignProfile({
      ...profileContextT?.userForeignProfile,
      ...followers,
    });
  };

  const handleUnFollow = async (idAuthorNotification?: string) => {
    const request = await instagramApiGetUnFollow(
      idAuthorNotification || profileContextT?.userForeignProfile.id!
    );

    if (request.hasOwnProperty("response")) {
      return uiContextStore?.setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const following = request.payload;
    const followers = request.payloadForeignUser;
    authContextT?.onLogin({ ...authContextT?.user, ...following });
    profileContextT?.setUserForeignProfile({
      ...profileContextT?.userForeignProfile,
      ...followers,
    });
  };

  return { handleFollow, handleUnFollow };
};
