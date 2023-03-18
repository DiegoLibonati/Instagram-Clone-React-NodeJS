import { ForeignUser, User } from "../types/types";

export const isUserFollow = (
  user: User | ForeignUser,
  username: string,
  arrayName: string
) => {
  if (user === undefined) return [];
  if (arrayName === "following") {
    return user.following?.filter(
      (user: User | ForeignUser) => user.username === username
    );
  }
  return user.followers?.filter(
    (user: User | ForeignUser) => user.username === username
  );
};
