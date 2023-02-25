import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfileContext } from "../../contexts/ProfileContext";

export const useProfileUser = () => {
  const { id: urlUsername } = useParams();
  const { user } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  if (urlUsername === user) return { user, isMainUser: urlUsername === user };

  return {
    user: userProfile,
    isMainUser: urlUsername === user,
  };
};
