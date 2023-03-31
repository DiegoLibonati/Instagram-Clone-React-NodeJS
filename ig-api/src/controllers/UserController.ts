import { UserModel } from "../models/UserModel";
import { regexEmail, regexUsername } from "../utils/regex";
import jwt from "jsonwebtoken";
import config from "../config";
import fs from "fs";
import { NewRequest } from "../types/types";
import { Response } from "express";
import { FollowModel } from "../models/FollowModel";
import { PublicationModel } from "../models/PublicationModel";
import { setPublication } from "../utils/setPublication";
import { NotificationModel } from "../models/NotificationModel";

export const User = {
  getUser: async (req: NewRequest, res: Response) => {
    const { username } = req.params;

    const foreignUser = await UserModel.findOne({ username: username });

    if (!foreignUser) {
      return res
        .status(404)
        .json({ message: `¡El perfil ${username} no existe!` });
    }

    let publications = await PublicationModel.find({
      idAuthor: foreignUser.id,
    });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(foreignUser, publication);
      })
    );

    const followers = await FollowModel.find({ idProfile: foreignUser.id });
    const following = await FollowModel.find({ idFollower: foreignUser.id });

    const payload = {
      id: foreignUser.id,
      username: foreignUser.username,
      name: foreignUser.name,
      email: foreignUser.email,
      publications: publications,
      followers: followers,
      following: following,
      avatar: foreignUser.avatar,
      description: foreignUser.description,
    };

    return res
      .status(201)
      .json({ message: "¡Usuario encontrado!", payload: payload });
  },
  editUser: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const { name, username, email, description } = req.body;
    let path = null;

    if (req.file) {
      path = req.file!.path;
    }

    if (!name || !username || !email)
      return res.status(400).json({
        message:
          "¡Los campos: correo electronico, nombre completo y nombre de usuario son obligatorios!",
      });

    if (!email.match(regexEmail))
      return res
        .status(400)
        .json({ message: "¡El email ingresado es invalido!" });
    if (!username.match(regexUsername))
      return res
        .status(400)
        .json({ message: "¡El usuario ingresado es invalido!" });

    const user = await UserModel.findOne({ _id: id });

    if (username !== user?.username) {
      const isUsernameExist = await UserModel.findOne({ username });

      if (isUsernameExist)
        return res.status(404).json({
          message: "¡Ya existe una cuenta con ese nombre de usuario!",
        });
    }

    if (email !== user?.email) {
      const isEmailExist = await UserModel.findOne({ email });

      if (isEmailExist)
        return res.status(404).json({
          message: "¡Ya existe una cuenta con ese correo electronico!",
        });
    }

    if (user!.avatar!.startsWith(config.API_BACK_URL!)) {
      console.log(user?.avatar!.split("/images\\")[1]);
      fs.unlinkSync(`/images/${user?.avatar!.split("/images\\")[1]}`);
    }

    user!.name = name;
    user!.username = username;
    user!.email = email;
    user!.description = description;
    user!.avatar = path
      ? `${config.API_BACK_URL}${path!.replace("src/", "")}`
      : user!.avatar;

    await user?.save();

    let publications = await PublicationModel.find({
      idAuthor: id,
    });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(user, publication);
      })
    );

    const followers = await FollowModel.find({ idProfile: id });
    const following = await FollowModel.find({ idFollower: id });
    const notifications = await NotificationModel.find({ idProfile: id });

    const jwtPayload = {
      id: user?._id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
    };

    const payload = {
      id: user?._id,
      name: user?.name,
      username: user?.username,
      email: user?.email,
      publications: publications,
      followers: followers,
      following: following,
      avatar: user?.avatar,
      description: user?.description,
      recentUsers: user?.recentUsers,
      notifications: notifications,
    };

    const token = jwt.sign(jwtPayload, config.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .cookie("ig-sess", token, {
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
        httpOnly: false,
      })
      .json({ message: "Usuario editado exitosamente", payload: payload });
  },
  getUsers: async (req: NewRequest, res: Response) => {
    const { username } = req.params;

    const users = await UserModel.find({
      username: { $regex: username, $options: "i" },
    });

    const usersPayload = users.map((user) => {
      return {
        username: user.username,
        avatar: user.avatar,
      };
    });

    res.status(200).json({ users: usersPayload });
  },
};
