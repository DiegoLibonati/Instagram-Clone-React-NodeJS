import express from "express";
import { Like } from "../../controllers/LikeController";
import { verifyToken } from "../../middlewares/verifyToken";

const LikeRouter = express.Router();

LikeRouter.post("/new", verifyToken, Like.createLike).delete(
  "/remove/:idPublication/:context",
  verifyToken,
  Like.removeLike
);

export default LikeRouter;
