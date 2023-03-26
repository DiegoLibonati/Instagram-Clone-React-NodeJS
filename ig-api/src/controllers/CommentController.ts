import { Response } from "express";
import { CommentModel } from "../models/CommentModel";
import { PublicationModel } from "../models/PublicationModel";
import { UserModel } from "../models/UserModel";
import { NewRequest } from "../types/types";
import { handleNewNotification } from "../utils/handleNewNotification";
import { setPublication } from "../utils/setPublication";

export const Comment = {
  createComment: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const { idPublication, context, comment } = req.body;

    const newComment = new CommentModel({
      date: new Date(),
      description: comment,
      idAuthor: id,
      idPost: idPublication,
    });

    await newComment.save();

    const publication = await PublicationModel.findOne({
      _id: newComment.idPost,
    });

    await handleNewNotification(
      id,
      publication?.idAuthor,
      "comment",
      idPublication
    );

    const userComment = await UserModel.findOne({ _id: id });

    const commentUpdated = {
      ...newComment.toObject(),
      name: userComment?.name,
      username: userComment?.username,
      avatar: userComment?.avatar,
    };

    if (context === "feed") {
      return res.status(201).json({
        payload: {
          comment: commentUpdated,
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
        comment: commentUpdated,
        publications: publications,
      },
    });
  },
};
