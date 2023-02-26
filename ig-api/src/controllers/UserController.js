import { UserModel } from "../models/UserModel.js";

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
};
