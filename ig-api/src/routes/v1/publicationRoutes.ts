import express from "express";
import { Publication } from "../../controllers/PublicationController";
import { upload } from "../../middlewares/uploadImage";
import { verifyToken } from "../../middlewares/verifyToken";

const PublicationRouter = express.Router();

PublicationRouter.post(
  "/new",
  verifyToken,
  upload.single("imgLink"),
  Publication.createPublication
);

export default PublicationRouter;
