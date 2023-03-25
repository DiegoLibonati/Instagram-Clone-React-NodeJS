import { UserModel } from "../models/UserModel";
import { Response } from "express";
import { NewRequest, Publication as PublicationType } from "../types/types";
import { PublicationModel } from "../models/PublicationModel";
import { FollowModel } from "../models/FollowModel";
import { setPublication } from "../utils/setPublication";

export const Feed = {
  getFeed: async (req: NewRequest, res: Response) => {
    const { id } = req.user;

    const currentDate = new Date();
    const lteDate = currentDate.getTime() - 259200000;

    const userFollowing = await FollowModel.find({ idFollower: id });

    let newFeed: any[] = [];

    for (const follow of userFollowing) {
      const publications = await PublicationModel.find({
        $and: [
          { idAuthor: follow.idProfile },
          { date: { $gt: new Date(lteDate) } },
        ],
      });

      if (!publications.length) continue;

      const user = await UserModel.findOne({ _id: follow.idProfile });

      for (const publication of publications) {
        newFeed.push(await setPublication(user, publication));
      }
    }

    return res.status(200).json({
      message: "Feed actualizado con exito",
      payload: newFeed.sort(
        (publication1, publication2) => publication2.date - publication1.date
      ),
    });
  },
};
