import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { ProfileContext } from "../contexts/Profile/ProfileContext";
import { UseProfileUser } from "../types/types";

export const useProfileUser = (): UseProfileUser => {
  const { id: urlUsername } = useParams();
  const authContextStore = useContext(AuthContext);

  const profileContextStore =
    useContext(ProfileContext);

  if (!urlUsername || urlUsername === undefined || urlUsername === null)
    return {
      user: authContextStore?.user!,
      isMainUser: true,
      setUser: authContextStore?.setUser!,
    };

  if (urlUsername === authContextStore?.user.username)
    return {
      user: authContextStore?.user,
      isMainUser: true,
      setUser: authContextStore?.setUser,
    };

  return {
    user: profileContextStore?.userForeignProfile!,
    isMainUser: false,
    setUser: profileContextStore?.setUserForeignProfile!,
  };
};
