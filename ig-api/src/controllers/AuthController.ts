import { regexEmail, regexPassword, regexUsername } from "../utils/regex";
import { UserModel } from "../models/UserModel";
import config from "../config";
import jwt from "jsonwebtoken";
import { NewRequest } from "../types/types";
import { Response } from "express";
import { PublicationModel } from "../models/PublicationModel";
import { FollowModel } from "../models/FollowModel";
import { setPublication } from "../utils/setPublication";
import { NotificationModel } from "../models/NotificationModel";

export const Auth = {
  getRenew: async (req: NewRequest, res: Response) => {
    const { id } = req.user;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return res
        .status(400)
        .clearCookie("ig-sess")
        .json({ message: "¡Token expirado!" })
        .end();
    }

    let publications = await PublicationModel.find({ idAuthor: id });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(user, publication);
      })
    );

    const followers = await FollowModel.find({ idProfile: id });
    const following = await FollowModel.find({ idFollower: id });
    const notifications = await NotificationModel.find({
      idProfile: user!._id,
    });

    const jwtPayload = {
      id: req.user.id,
      name: req.user.name,
      username: req.user.username,
      email: req.user.email,
    };

    const payload = {
      id: user?.id,
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
      .json({ payload: payload });
  },
  getLogout: async (req: NewRequest, res: Response) => {
    return res
      .status(200)
      .clearCookie("ig-sess")
      .json({ message: "¡Sesion cerrada!" })
      .end();
  },
  postLogin: async (req: NewRequest, res: Response) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user)
      return res.status(404).json({ message: "¡El usuario no existe!" });

    const validation = user.comparePassword(password);

    if (!validation)
      return res
        .status(401)
        .json({ message: "¡La contraseña ingresado es incorrecta!" });

    let publications = await PublicationModel.find({ idAuthor: user!._id });

    publications = await Promise.all(
      publications.map((publication) => {
        return setPublication(user, publication);
      })
    );

    const followers = await FollowModel.find({ idProfile: user!._id });
    const following = await FollowModel.find({ idFollower: user!._id });
    const notifications = await NotificationModel.find({
      idProfile: user!._id,
    });

    const jwtPayload = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };

    const payload = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      publications: publications,
      followers: followers,
      following: following,
      avatar: user.avatar,
      description: user.description,
      recentUsers: user.recentUsers,
      notifications: notifications,
    };

    const token = jwt.sign(jwtPayload, config.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .cookie("ig-sess", token, {
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
        httpOnly: false,
      })
      .json({ payload: payload });
  },
  postRegister: async (req: NewRequest, res: Response) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password)
      return res.status(400).json({
        message:
          "¡Los campos: correo electronico, nombre completo, nombre de usuario y contraseña son obligatorios!",
      });

    if (!email.match(regexEmail))
      return res
        .status(400)
        .json({ message: "¡El email ingresado es invalido!" });
    if (!username.match(regexUsername))
      return res
        .status(400)
        .json({ message: "¡El usuario ingresado es invalido!" });
    if (!password.match(regexPassword))
      return res.status(400).json({
        message:
          "¡La contraseña debe tener al menos 8 caracteres, 1 letra mayuscula, 1 letra miniscula y un numero!",
      });

    const existingUserEmail = await UserModel.findOne({ email });

    if (existingUserEmail)
      return res
        .status(400)
        .json({ message: "Ya existe un usuario con ese email" });

    const existingUserUsername = await UserModel.findOne({ username });

    if (existingUserUsername)
      return res
        .status(400)
        .json({ message: "Ya existe un usuario con ese username" });

    const user = new UserModel({
      name: name,
      username: username,
      email: email,
      avatar: "",
      description: `Hola soy ${name} y esta es mi presentacion`,
    });

    user.password = user.generateHash(password);

    await user.save();

    res
      .status(201)
      .json({ message: "Usuario registrado exitosamente", user: user });
  },
};
