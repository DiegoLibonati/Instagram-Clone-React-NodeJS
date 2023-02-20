import express from "express";
import { Auth } from "../../controllers/AuthController.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", Auth.postRegister).post("/login", Auth.postLogin);

export default AuthRouter;
