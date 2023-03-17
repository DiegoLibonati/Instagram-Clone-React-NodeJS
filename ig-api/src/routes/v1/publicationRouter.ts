import express from "express";
import { Publication } from "../../controllers/PublicationController";
import { upload } from "../../middlewares/uploadImage";
import { verifyToken } from "../../middlewares/verifyToken";

const PublicationRouter = express.Router();

PublicationRouter.post(
  "/:id",
  verifyToken,
  upload.single("imgLink"),
  Publication.createPublication
).get("/", verifyToken, Publication.getFeed);

export default PublicationRouter;
