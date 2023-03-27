import { UserModel } from "../models/UserModel";
import { NewRequest } from "../types/types";
import { Response } from "express";

export const Suggestion = {
  getUsers: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const users = await UserModel.aggregate([{ $sample: { size: 5 } }]);

    return res
      .status(200)
      .json({ payload: users.filter((user) => user._id != id) });
  },
};
