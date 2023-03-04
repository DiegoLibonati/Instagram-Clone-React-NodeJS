import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const Publication = {
  createPublication: async (req, res) => {
    const { id: idUsername } = req.params;
    const { id, description, likes, comments, date } = req.body;
    const { path } = req.file;

    const user = await UserModel.findOne({ username: idUsername });

    const publication = {
      id: id,
      imgLink: `${config.API_BACK_URL}${path.replace("src\\", "")}`,
      description: description,
      likes: JSON.parse(likes),
      comments: JSON.parse(comments),
      date: date,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    };

    user.publications.push(publication);

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
      .json({ message: "¡Publicacion creada exitosamente!", payload: payload });
  },
};
