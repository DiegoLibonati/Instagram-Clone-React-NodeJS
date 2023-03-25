import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { ProfileContext } from "../contexts/Profile/ProfileContext";

export const useProfileUser = () => {
  const { id: urlUsername } = useParams();
  const { user, setUser } = useContext(AuthContext);

  const { userForeignProfile, setUserForeignProfile } =
    useContext(ProfileContext);

  if (!urlUsername || urlUsername === undefined || urlUsername === null)
    return { user, isMainUser: true, setUser };

  if (urlUsername === user.username) return { user, isMainUser: true, setUser };

  return {
    user: userForeignProfile,
    isMainUser: false,
    setUser: setUserForeignProfile,
  };
};
