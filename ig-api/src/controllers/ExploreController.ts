import { NewRequest } from "../types/types";
import { Response } from "express";
import { PublicationModel } from "../models/PublicationModel";
import { setPublication } from "../utils/setPublication";
import { UserModel } from "../models/UserModel";

export const Explore = {
  getExplore: async (req: NewRequest, res: Response) => {
    const publications = await PublicationModel.aggregate([
      { $sample: { size: 20 } },
    ]);

    const payload = await Promise.all(
      publications.map(async (publication) => {
        const user = await UserModel.findOne({ _id: publication.idAuthor });
        return setPublication(user, publication);
      })
    );

    return res.status(200).json({ payload: payload });
  },
};
