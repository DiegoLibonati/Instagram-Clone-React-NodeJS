import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instagramApiGetFollow } from "../../api/instagramApiGetFollow";
import { instagramApiGetUnFollow } from "../../api/instagramApiGetUnFollow";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfileContext } from "../../contexts/ProfileContext";
import { UIContext } from "../../contexts/UIContext";

export const useProfileUser = () => {
  const { id: urlUsername } = useParams();
  const { user, onLogin } = useContext(AuthContext);
  const { setAlertOpen } = useContext(UIContext);
  const { userForeignProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleFollow = async () => {
    const request = await instagramApiGetFollow(urlUsername!);

    if (request.hasOwnProperty("response")) {
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }

    const userData = request.payload;
    onLogin(userData);
    navigate(0);
  };

  const handleUnFollow = async () => {
    const request = await instagramApiGetUnFollow(urlUsername!);
    console.log(request);
    if (request.hasOwnProperty("response")) {
      return setAlertOpen(
        "error",
        "¡Oh, algo salio mal!",
        request.response.data.message,
        "bg-red-600"
      );
    }
    const userData = request.payload;
    onLogin(userData);
    navigate(0);
  };

  // if (!urlUsername || urlUsername === undefined) return user;

  if (urlUsername === user.username) return { user, isMainUser: true };

  return {
    user: userForeignProfile,
    isMainUser: false,
    handleFollow,
    handleUnFollow,
  };
};
