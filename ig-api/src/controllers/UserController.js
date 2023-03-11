import { UserModel } from "../models/UserModel.js";
import { regexEmail, regexUsername } from "../utils/regex.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import fs from "fs";

export const User = {
  getUser: async (req, res) => {
    const { username } = req.user;
    const { id } = req.params;

    const foreignUser = await UserModel.findOne({ username: id });
    const authUser = await UserModel.findOne({ username });

    if (!foreignUser) {
      return res.status(404).json({ message: `¡El perfil ${id} no existe!` });
    }

    const userAuthFollowing = Boolean(
      foreignUser.followers.filter((follower) => follower.id === authUser.id)[0]
    );

    const userForeignFollowing = Boolean(
      authUser.followers.filter((follower) => follower.id === authUser.id)[0]
    );

    const payload = {
      id: foreignUser.id,
      username: foreignUser.username,
      name: foreignUser.name,
      email: foreignUser.email,
      publications: foreignUser.publications,
      followers: foreignUser.followers,
      following: foreignUser.following,
      avatar: foreignUser.avatar,
      description: foreignUser.description,
      userAuthFollowing: userAuthFollowing,
      userForeignFollowing: userForeignFollowing,
    };

    return res
      .status(201)
      .json({ message: "¡Usuario encontrado!", payload: payload });
  },
  editUser: async (req, res) => {
    const { id: idUsername } = req.params;
    const { name, username, email, description } = req.body;
    const { path } = req.file;

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

    const user = await UserModel.findOne({ username: idUsername });

    if (username !== user.username) {
      const isUsernameExist = await UserModel.findOne({ username });

      if (isUsernameExist)
        return res.status(404).json({
          message: "¡Ya existe una cuenta con ese nombre de usuario!",
        });
    }

    if (email !== user.email) {
      const isEmailExist = await UserModel.findOne({ email });

      if (isEmailExist)
        return res.status(404).json({
          message: "¡Ya existe una cuenta con ese correo electronico!",
        });
    }

    if (user.avatar.startsWith(config.API_BACK_URL)) {
      console.log(user.avatar.split("/images\\")[1]);
      fs.unlinkSync(`src/images/${user.avatar.split("/images\\")[1]}`);
    }

    user.name = name;
    user.username = username;
    user.email = email;
    user.description = description;
    user.avatar = `${config.API_BACK_URL}${path.replace("src\\", "")}`;

    await user.save();

    const jwtPayload = {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    };

    const payload = {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      publications: user.publications,
      followers: user.followers,
      following: user.following,
      avatar: user.avatar,
      description: user.description,
      recentUsers: user.recentUsers,
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
  getFollow: async (req, res) => {
    const usernameAuthUser = req.user.username;

    const { id: usernameProfile } = req.params;

    const foreignUser = await UserModel.findOne({ username: usernameProfile });
    const authUser = await UserModel.findOne({ username: usernameAuthUser });

    if (!foreignUser) {
      return res.status(404).json({ message: `¡El perfil ${id} no existe!` });
    }

    foreignUser.followers.push({
      id: authUser._id,
      username: authUser.username,
      name: authUser.name,
      avatar: authUser.avatar,
    });
    authUser.following.push({
      id: foreignUser._id,
      username: foreignUser.username,
      name: foreignUser.name,
      avatar: foreignUser.avatar,
    });

    foreignUser.save();
    authUser.save();

    const payload = {
      id: authUser._id,
      name: authUser.name,
      username: authUser.username,
      email: authUser.email,
      publications: authUser.publications,
      followers: authUser.followers,
      following: authUser.following,
      avatar: authUser.avatar,
      description: authUser.description,
      recentUsers: authUser.recentUsers,
    };

    return res.status(200).json({
      message: `¡Se comenzo a seguir a ${foreignUser.username} exitosamente!`,
      payload: payload,
    });
  },
  getUnFollow: async (req, res) => {
    const usernameAuthUser = req.user.username;

    const { id: usernameProfile } = req.params;

    const foreignUser = await UserModel.findOne({ username: usernameProfile });
    const authUser = await UserModel.findOne({ username: usernameAuthUser });

    if (!foreignUser) {
      return res.status(404).json({ message: `¡El perfil ${id} no existe!` });
    }

    foreignUser.followers = foreignUser.followers.filter(
      (follower) => follower.id !== authUser.id
    );
    authUser.following = authUser.following.filter(
      (following) => following.id !== foreignUser.id
    );

    foreignUser.save();
    authUser.save();

    const payload = {
      id: authUser._id,
      name: authUser.name,
      username: authUser.username,
      email: authUser.email,
      publications: authUser.publications,
      followers: authUser.followers,
      following: authUser.following,
      avatar: authUser.avatar,
      description: authUser.description,
      recentUsers: authUser.recentUsers,
    };

    return res.status(200).json({
      message: `¡Se dejo de seguir a ${foreignUser.username} exitosamente!`,
      payload: payload,
    });
  },
  getUsers: async (req, res) => {
    const { id: username } = req.params;

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
  getRecentSearchUser: async (req, res) => {
    const { id: foreignUsername } = req.params;
    const { username: authUsername } = req.user;

    const foreignUser = await UserModel.findOne({ username: foreignUsername });
    const authUser = await UserModel.findOne({ username: authUsername });

    const recentUserObject = {
      id: foreignUser.id,
      username: foreignUser.username,
      name: foreignUser.name,
      avatar: foreignUser.avatar,
    };

    if (authUser.recentUsers.length === 20) {
      authUser.recentUsers.shift();
    }

    const userInRecentUsers = Boolean(
      authUser.recentUsers.filter((user) => user.id === foreignUser.id)[0]
    );

    if (!userInRecentUsers) {
      authUser.recentUsers.push(recentUserObject);
      authUser.save();
    }

    const payload = {
      id: authUser._id,
      name: authUser.name,
      username: authUser.username,
      email: authUser.email,
      publications: authUser.publications,
      followers: authUser.followers,
      following: authUser.following,
      avatar: authUser.avatar,
      description: authUser.description,
      recentUsers: authUser.recentUsers,
    };

    return res.status(200).json({
      payload: payload,
    });
  },
};
