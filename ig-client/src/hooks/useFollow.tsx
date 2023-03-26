import { useContext } from "react";
import { instagramApiGetFollow } from "../api/Follow/instagramApiGetFollow";
import { instagramApiGetUnFollow } from "../api/Follow/instagramApiGetUnFollow";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { ProfileContext } from "../contexts/Profile/ProfileContext";
import { UIContext } from "../contexts/Ui/UIContext";

export const useFollow = () => {
  const { setAlertOpen } = useContext(UIContext);
  const { user, onLogin } = useContext(AuthContext);
  const { userForeignProfile, setUserForeignProfile } =
    useContext(ProfileContext);

  const handleFollow = async (idAuthorNotification?: string) => {
    const request = await instagramApiGetFollow(
      idAuthorNotification || userForeignProfile.id
    );

    if (request.hasOwnProperty("response")) {
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const following = request.payload;
    const followers = request.payloadForeignUser;
    onLogin({ ...user, ...following });
    setUserForeignProfile({ ...userForeignProfile, ...followers });
  };

  const handleUnFollow = async (idAuthorNotification?: string) => {
    const request = await instagramApiGetUnFollow(
      idAuthorNotification || userForeignProfile.id
    );

    if (request.hasOwnProperty("response")) {
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const following = request.payload;
    const followers = request.payloadForeignUser;
    onLogin({ ...user, ...following });
    setUserForeignProfile({ ...userForeignProfile, ...followers });
  };

  return { handleFollow, handleUnFollow };
};
