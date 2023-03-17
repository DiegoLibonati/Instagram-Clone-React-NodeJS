import { UserModel } from "../models/UserModel.js";
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
      recentUsers: user.recentUsers,
      notifications: user.notifications,
    };

    return res
      .status(200)
      .json({ message: "¡Publicacion creada exitosamente!", payload: payload });
  },
  getFeed: async (req, res) => {
    const { username } = req.user;

    const user = await UserModel.findOne({ username });

    const following = user.following;

    const usernamesFollowing = following.map(
      (userFollowed) => userFollowed.username
    );

    const newFeed = [];

    for (const username of usernamesFollowing) {
      const userFollowed = await UserModel.findOne({ username });

      const publicationsOfUserFollowed = userFollowed.publications;

      if (publicationsOfUserFollowed.length === 0) {
        return null;
      }

      publicationsOfUserFollowed.forEach((publication) => {
        const currentDate = new Date();
        const isNew = (currentDate - publication.date) / 86400000 <= 3;

        if (isNew) return newFeed.push(publication);

        return null;
      });
    }

    res.status(200).json({
      message: "Feed actualizado con exito",
      payload: newFeed,
    });
  },
};
