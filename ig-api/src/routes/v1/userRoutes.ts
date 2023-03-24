import express from "express";
import { User } from "../../controllers/UserController";
import { upload } from "../../middlewares/uploadImage";
import { verifyToken } from "../../middlewares/verifyToken";

const UserRouter = express.Router();

UserRouter.get("/:username", verifyToken, User.getUser)
  .put("/", verifyToken, upload.single("avatar"), User.editUser)
  .get("/users/:username", verifyToken, User.getUsers);

export default UserRouter;
