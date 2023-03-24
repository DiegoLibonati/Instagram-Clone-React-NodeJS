import { ForeignUser, User } from "../types/types";

export const isUserFollow = (
  user: User | ForeignUser,
  id: string,
  arrayName: string
) => {
  if (user === undefined) return [];
  if (arrayName === "following") {
    return user.following?.filter((follow: any) => follow.idProfile === id);
  }
  return user.followers?.filter((follow: any) => follow.idFollower === id);
};
