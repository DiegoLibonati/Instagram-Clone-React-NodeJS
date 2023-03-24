import express from "express";
import { Follow } from "../../controllers/FollowController";
import { verifyToken } from "../../middlewares/verifyToken";

const FollowRouter = express.Router();

FollowRouter.get("/follow/:id", verifyToken, Follow.getFollow).get(
  "/unfollow/:id",
  verifyToken,
  Follow.getUnFollow
);

export default FollowRouter;
