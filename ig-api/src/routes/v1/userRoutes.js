import express from "express";
import { User } from "../../controllers/UserController.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const UserRouter = express.Router();

UserRouter.get("/:id", verifyToken, User.getUser);

export default UserRouter;
