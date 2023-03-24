import { UserModel } from "../models/UserModel";

export const setRecentUser = async (idRecentUser: string | undefined) => {
  const search = await UserModel.findOne({ _id: idRecentUser });

  const userObject = {
    id: search?.id,
    username: search?.username,
    avatar: search?.avatar,
    name: search?.name,
  };

  return userObject;
};
