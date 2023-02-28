import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfileContext } from "../../contexts/ProfileContext";

export const useProfileUser = () => {
  const { id: urlUsername } = useParams();
  const { user } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  if (!urlUsername || urlUsername === undefined) return user;

  if (urlUsername === user.username) return { user, isMainUser: true };

  return {
    user: userProfile,
    isMainUser: false,
  };
};
