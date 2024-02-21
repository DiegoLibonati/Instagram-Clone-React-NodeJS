import { Request } from "express";
import mongoose, { Document } from "mongoose";

export type User = {
  _id?: string;
  status?: string;
  id?: string;
  email: string;
  name: string;
  username: string;
  publications?: Publication[];
  followers?: User[];
  following?: User[];
  avatar: string;
  description?: string;
  recentUsers?: RecentSearch[];
  notifications?: Notification[];
};

export type Notification = {
  id: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  notificationType: string;
  wasViewed: boolean;
  idProfile: string;
  idAuthor: string;
  idPost?: string;
}

export type RecentSearch = {
  idSearched: string;
  username: string;
  name: string;
  avatar: string;
};


export type ForeignUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  publications: Publication[];
  followers: User[];
  following: User[];
  avatar: string;
  description: string;
};

export type Publication = {
  _id?: mongoose.Types.ObjectId;
  name?: string;
  username?: string;
  avatar?: string;
  imgLink?: string;
  description?: string;
  date?: Date;
  likes?: Like[];
  comments?: Comment[];
  idAuthor?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Comment = {
  id: string;
  _id?: string;
  username: string;
  avatar: string;
  name: string;
  description: string;
  date: string;
  idPost: string;
  idAuthor: string;
};


export type Like = {
  id?: string;
  _id?: string;
  name: string;
  username: string;
  avatar: string;
  idPost: string;
  idAuthor: string;
};

export interface NewRequest extends Request {
  user?: string | JwtPayload;
}
