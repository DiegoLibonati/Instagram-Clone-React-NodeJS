import { Request } from "express";

export type User = {
  _id?: string;
  status?: string;
  id: string;
  email: string;
  name: string;
  username: string;
  publications: Publication[];
  followers: User[];
  following: User[];
  avatar: string;
  description: string;
  recentUsers: Record<string, string>[];
  notifications: Record<string, string | boolean>[];
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

export interface NewRequest extends Request {
  user?: string | JwtPayload;
}
