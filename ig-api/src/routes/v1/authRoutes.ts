import express from "express";
import { Auth } from "../../controllers/AuthController";
import { verifyToken } from "../../middlewares/verifyToken";

const AuthRouter = express.Router();

AuthRouter.post("/register", Auth.postRegister)
  .post("/login", Auth.postLogin)
  .get("/renew", verifyToken, Auth.getRenew)
  .get("/logout", Auth.getLogout);

export default AuthRouter;
