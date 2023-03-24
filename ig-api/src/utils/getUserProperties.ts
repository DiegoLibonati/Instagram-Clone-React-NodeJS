import { UserModel } from "../models/UserModel";

export const getUserProperties = async (idUser: string) => {
  const user = await UserModel.findOne({ _id: idUser });
  console.log(user);
  const userObject = {
    avatar: user!.avatar,
    name: user!.name,
    username: user!.username,
  };

  return userObject;
};
