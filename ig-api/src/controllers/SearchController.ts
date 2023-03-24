import { UserModel } from "../models/UserModel";
import { NewRequest } from "../types/types";
import { Response } from "express";
import { setRecentUser } from "../utils/setRecentUser";

export const Search = {
  setRecentSearchUser: async (req: NewRequest, res: Response) => {
    const { username } = req.params;
    const { id } = req.user;

    const userSearched = await UserModel.findOne({
      username: username,
    });
    const authUser = await UserModel.findOne({ _id: id });

    if (authUser?.recentUsers.length === 20) {
      authUser?.recentUsers.shift();
    }

    const userInRecentUsers = authUser?.recentUsers.some(
      (user) => user.idSearched === userSearched?.id
    );

    if (!userInRecentUsers) {
      authUser?.recentUsers.push({ idSearched: userSearched?.id });
      authUser?.save();
    }

    return res.status(200).json({
      payload: authUser?.recentUsers,
    });
  },
  getRecentSearch: async (req: NewRequest, res: Response) => {
    const { id } = req.user;

    const user = await UserModel.findOne({ _id: id });

    const recentUsers = await Promise.all(
      user!.recentUsers.map((recentUser) => {
        return setRecentUser(recentUser.idSearched);
      })
    );

    return res.status(200).json({
      payload: recentUsers,
    });
  },
};
