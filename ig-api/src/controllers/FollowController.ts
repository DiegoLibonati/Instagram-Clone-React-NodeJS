import { UserModel } from "../models/UserModel";
import { handleNewNotification } from "../utils/handleNewNotification";
import { handleRemoveNotification } from "../utils/handleRemoveNotification";
import { NewRequest } from "../types/types";
import { Response } from "express";
import { FollowModel } from "../models/FollowModel";

export const Follow = {
  getFollow: async (req: NewRequest, res: Response) => {
    const idFollower = req.user.id;

    const { id: idProfile } = req.params;

    const foreignUser = await UserModel.findOne({ id: idProfile });

    if (!foreignUser) {
      return res
        .status(404)
        .json({ message: `¡El perfil ${idProfile} no existe!` });
    }

    const follow = new FollowModel({
      idProfile: idProfile,
      idFollower: idFollower,
    });

    await follow.save();

    const foreignUserFollowers = await FollowModel.find({
      idProfile: idProfile,
    });

    const authUserFollowing = await FollowModel.find({
      idFollower: idFollower,
    });

    foreignUser.save();
    console.log(idFollower);
    handleNewNotification(idFollower, idProfile, "follow");

    const payload = {
      following: authUserFollowing,
    };

    const payloadForeignUser = {
      followers: foreignUserFollowers,
    };

    return res.status(200).json({
      message: `¡Se comenzo a seguir a ${foreignUser.username} exitosamente!`,
      payload: payload,
      payloadForeignUser: payloadForeignUser,
    });
  },
  getUnFollow: async (req: NewRequest, res: Response) => {
    const idFollower = req.user.id;

    const { id: idProfile } = req.params;

    const foreignUser = await UserModel.findOne({ id: idProfile });

    if (!foreignUser) {
      return res
        .status(404)
        .json({ message: `¡El perfil ${idProfile} no existe!` });
    }

    const follow = await FollowModel.findOne({
      $and: [{ idFollower: idFollower }, { idProfile: idProfile }],
    });

    if (!follow) {
      return res.status(201).json({ message: "¡No existe el follow!" });
    }

    await FollowModel.findOneAndDelete({
      $and: [{ idFollower: idFollower }, { idProfile: idProfile }],
    });

    const foreignUserFollowers = await FollowModel.find({
      idProfile: idProfile,
    });

    const authUserFollowing = await FollowModel.find({
      idFollower: idFollower,
    });

    handleRemoveNotification(idFollower, idProfile, "follow");

    const payload = {
      following: authUserFollowing,
    };

    const payloadForeignUser = {
      followers: foreignUserFollowers,
    };

    return res.status(200).json({
      message: `¡Se dejo de seguir a ${foreignUser!.username} exitosamente!`,
      payload: payload,
      payloadForeignUser: payloadForeignUser,
    });
  },
};
