import express from "express";
import { Explore } from "../../controllers/ExploreController";
import { verifyToken } from "../../middlewares/verifyToken";

const ExploreRouter = express.Router();

ExploreRouter.get("/", verifyToken, Explore.getExplore);

export default ExploreRouter;
