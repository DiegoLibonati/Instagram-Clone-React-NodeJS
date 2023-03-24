import express from "express";
import { Feed } from "../../controllers/FeedController";
import { verifyToken } from "../../middlewares/verifyToken";

const FeedRouter = express.Router();

FeedRouter.get("/", verifyToken, Feed.getFeed);

export default FeedRouter;
