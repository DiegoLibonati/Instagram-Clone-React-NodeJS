import { UserModel } from "../models/UserModel";
import config from "../config";
import { Response } from "express";
import { NewRequest } from "../types/types";
import { PublicationModel } from "../models/PublicationModel";

export const Publication = {
  createPublication: async (req: NewRequest, res: Response) => {
    const { id } = req.user;
    const { description, date } = req.body;
    const { path } = req.file!;

    const publication = new PublicationModel({
      imgLink: `${config.API_BACK_URL}${path.replace("src\\", "")}`,
      description: description,
      date: date,
      idAuthor: id,
    });

    await publication.save();

    const user = await UserModel.findOne({ _id: id });

    const payload = {
      id: publication._id,
      imgLink: publication.imgLink,
      description: publication.description,
      likes: [],
      comments: [],
      date: publication.date,
      username: user!.username,
      avatar: user!.avatar,
      name: user!.name,
    };

    return res.status(200).json({
      message: "¡Publicacion creada exitosamente!",
      publication: payload,
    });
  },
  likePublication: async (req: NewRequest, res: Response) => {
    const { username, idPublication } = req.body;
    // const { username: usernameLike } = req.user;

    // const authorLike = await UserModel.findOne({ username: usernameLike });
    const userPublication = await UserModel.findOne({ username });

    // userPublication!.publications = userPublication!.publications.map(
    //   (publication) => {
    //     console.log(publication._id);
    //     if (publication._id == idPublication) {
    //       publication.likes.push({
    //         username: username,
    //       });

    //       return publication;
    //     }

    //     return publication;
    //   }
    // );

    await userPublication!.save();

    res.status(201).json({
      message: "¡Publicacion Likeada con Exito!",
      payload: userPublication,
    });
  },
};
