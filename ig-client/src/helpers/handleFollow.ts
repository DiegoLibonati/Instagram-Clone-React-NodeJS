import { instagramApiGetFollow } from "../api/User/instagramApiGetFollow";
import { ForeignUser, User } from "../types/types";

export const handleFollow = async (
  setAlertOpen: (
    type: string,
    title: string,
    message: string,
    color: string
  ) => void,
  onLogin: (payload: User) => void,
  userForeignProfile: ForeignUser,
  setUserForeignProfile: (payload: ForeignUser["followers"]) => void,
  username: string
) => {
  const request = await instagramApiGetFollow(username);

  if (request.hasOwnProperty("response")) {
    return setAlertOpen(
      "error",
      "¡Oh, algo salio mal!",
      request.response.data.message,
      "bg-red-600"
    );
  }

  const userData = request.payload;
  const foreignUserData = request.payloadForeignUser;
  onLogin(userData);
  setUserForeignProfile({ ...userForeignProfile, ...foreignUserData });
};
