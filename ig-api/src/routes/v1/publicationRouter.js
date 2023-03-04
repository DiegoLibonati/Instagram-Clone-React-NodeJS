import express from "express";
import { Publication } from "../../controllers/PublicationController.js";
import { upload } from "../../middlewares/uploadImage.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const PublicationRouter = express.Router();

PublicationRouter.post(
  "/:id",
  verifyToken,
  upload.single("imgLink"),
  Publication.createPublication
);

export default PublicationRouter;
