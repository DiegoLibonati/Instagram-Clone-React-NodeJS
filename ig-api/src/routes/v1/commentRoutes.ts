import express from "express";
import { Comment } from "../../controllers/CommentController";
import { verifyToken } from "../../middlewares/verifyToken";

const CommentRouter = express.Router();

CommentRouter.post("/new", verifyToken, Comment.createComment);

export default CommentRouter;
