import { Follow, ForeignUser, User } from "../types/types";

export const isUserFollow = (
  user: User | ForeignUser,
  id: string,
  arrayName: string
) => {
  if (user === undefined) return [];
  if (arrayName === "following") {
    return user.following?.some((follow: Follow) => follow.idProfile === id);
  }
  return user.followers?.some((follow: Follow) => follow.idFollower === id);
};
