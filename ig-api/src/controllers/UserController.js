import { UserModel } from "../models/UserModel.js";
import { regexEmail, regexUsername } from "../utils/regex.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import fs from "fs";

export const User = {
  getUser: async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findOne({ username: id });

    if (!user) {
      return res.status(404).json({ message: `¡El perfil ${id} no existe!` });
    }

    const payload = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      publications: user.publications,
      followers: user.followers,
      following: user.following,
      avatar: user.avatar,
      description: user.description,
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
    };

    const token = jwt.sign(payload, config.TOKEN_SECRET, {
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
};
