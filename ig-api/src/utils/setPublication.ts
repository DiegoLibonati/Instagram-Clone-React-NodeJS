import { CommentModel } from "../models/CommentModel";
import { LikeModel } from "../models/LikeModel";
import { UserModel } from "../models/UserModel";
import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  avatar?: string;
  name?: string;
  username?: string;
}

interface IPublication extends Document {
  _id: mongoose.Types.ObjectId;
  avatar?: string;
  name?: string;
  username?: string;
  likes: any[];
  comments: any[];
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

export const setPublication = async (
  user: IUser | null,
  publication: IPublication
) => {
  let likes = await LikeModel.find({ idPost: publication._id });
  let comments = await CommentModel.find({ idPost: publication._id });

  if (!likes.length && !comments.length) {
    publication.likes = [];
    publication.comments = [];
    publication.avatar = user?.avatar;
    publication.name = user?.name;
    publication.username = user?.username;
    return publication;
  }

  if (likes.length && !comments.length) {
    likes = await Promise.all(
      likes.map(async (like) => {
        const user = await UserModel.findOne({ _id: like.idAuthor });
        like.name = user?.name;
        like.username = user?.username;
        like.avatar = user?.avatar;
        return like;
      })
    );
    publication.likes = likes;
    publication.comments = [];
    publication.avatar = user?.avatar;
    publication.name = user?.name;
    publication.username = user?.username;
    return publication;
  }

  if (!likes.length && comments.length) {
    comments = await Promise.all(
      comments.map(async (comment) => {
        const user = await UserModel.findOne({ _id: comment.idAuthor });
        comment.name = user?.name;
        comment.username = user?.username;
        comment.avatar = user?.avatar;
        return comment;
      })
    );
    publication.likes = [];
    publication.comments = comments;
    publication.avatar = user?.avatar;
    publication.name = user?.name;
    publication.username = user?.username;
    return publication;
  }

  likes = await Promise.all(
    likes.map(async (like) => {
      const user = await UserModel.findOne({ _id: like.idAuthor });
      like.name = user?.name;
      like.username = user?.username;
      like.avatar = user?.avatar;
      return like;
    })
  );

  comments = await Promise.all(
    comments.map(async (comment) => {
      const user = await UserModel.findOne({ _id: comment.idAuthor });
      comment.name = user?.name;
      comment.username = user?.username;
      comment.avatar = user?.avatar;
      return comment;
    })
  );

  publication.likes = likes;
  publication.comments = comments;
  publication.avatar = user?.avatar;
  publication.name = user?.name;
  publication.username = user?.username;
  return publication;
};
