import { Response } from "express";
import { LikeModel } from "../models/LikeModel";
import { PublicationModel } from "../models/PublicationModel";
import { UserModel } from "../models/UserModel";
import { NewRequest } from "../types/types";
import { handleNewNotification } from "../utils/handleNewNotification";
import { handleRemoveNotification } from "../utils/handleRemoveNotification";
import { setPublication } from "../utils/setPublication";

export const Like = {
  createLike: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const { idPublication, context } = req.body;

    const like = new LikeModel({
      idPost: idPublication,
      idAuthor: id,
    });

    await like.save();

    const publication = await PublicationModel.findOne({ _id: like.idPost });

    await handleNewNotification(
      like.idAuthor,
      publication?.idAuthor,
      "like",
      publication?.id
    );

    if (context === "feed") {
      return res.status(201).json({
        payload: {
          like: like,
        },
      });
    }

    const user = await UserModel.findOne({ _id: publication?.idAuthor });

    let publications = await PublicationModel.find({
      idAuthor: user!.id,
    });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(user, publication);
      })
    );

    return res.status(201).json({
      payload: {
        like: like,
        publications: publications,
      },
    });
  },
  removeLike: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const { idPublication, context } = req.params;

    const like = await LikeModel.findOne({
      $and: [{ idPost: idPublication }, { idAuthor: id }],
    });

    if (!like) {
      return res.status(404).json({
        message: "El like no existe",
      });
    }

    await LikeModel.deleteOne({
      $and: [{ idPost: idPublication }, { idAuthor: id }],
    });

    const publication = await PublicationModel.findOne({ _id: like.idPost });

    handleRemoveNotification(like.idAuthor, publication?.idAuthor, "like");

    if (context === "feed") {
      return res.status(201).json({
        payload: {
          like,
        },
      });
    }

    const user = await UserModel.findOne({ _id: publication?.idAuthor });

    let publications = await PublicationModel.find({
      idAuthor: user!.id,
    });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(user, publication);
      })
    );

    return res.status(201).json({
      payload: {
        idLike: like!.id,
        publications: publications,
      },
    });
  },
};
