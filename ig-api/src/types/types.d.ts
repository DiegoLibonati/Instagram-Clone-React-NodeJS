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
  recentUsers?: Record<string, string>[];
  notifications?: Record<string, string | boolean>[];
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
  likes?: Array;
  comments?: Array;
  idAuthor?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface NewRequest extends Request {
  user?: string | JwtPayload;
}
