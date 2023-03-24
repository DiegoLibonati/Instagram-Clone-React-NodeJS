import { UserModel } from "../models/UserModel";
import { Response } from "express";
import { NewRequest, Publication as PublicationType } from "../types/types";
import { PublicationModel } from "../models/PublicationModel";
import { FollowModel } from "../models/FollowModel";
import { setPublication } from "../utils/setPublication";

export const Feed = {
  getFeed: async (req: NewRequest, res: Response) => {
    const { id } = req.user;

    const userFollowing = await FollowModel.find({ idFollower: id });

    const profilesFollowing = userFollowing!.map((follow) => follow.idProfile);

    let newFeed: PublicationType[] = [];

    for (const idProfile of profilesFollowing!) {
      const currentDate = new Date();
      const lteDate = currentDate.getTime() - 259200000;
      const publications = await PublicationModel.find({
        $and: [{ idAuthor: idProfile }, { date: { $gt: new Date(lteDate) } }],
      });

      const user = await UserModel.findOne({ id: idProfile });

      if (publications!.length === 0) {
        return null;
      }

      newFeed = await Promise.all(
        publications.map((publication) => {
          return setPublication(user, publication);
        })
      );
    }

    return res.status(200).json({
      message: "Feed actualizado con exito",
      payload: newFeed,
    });
  },
};
