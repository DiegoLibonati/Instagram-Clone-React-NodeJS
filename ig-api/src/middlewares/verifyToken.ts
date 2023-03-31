import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { NewRequest } from "../types/types";

export const verifyToken = (
  req: NewRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");

  if (!token)
    return res
      .status(401)
      .clearCookie("ig-sess")
      .json({ message: "Token invalido, sesion expirada." })
      .end();

  try {
    const verified = jwt.verify(token, config.TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (error) {
    return res
      .status(400)
      .clearCookie("ig-sess")
      .json({ message: error })
      .end();
  }
};
