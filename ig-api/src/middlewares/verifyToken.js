import jwt from "jsonwebtoken";
import config from "../config.js";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res
      .status(401)
      .json({ message: "Token invalido, sesion expirada." });

  try {
    const verified = jwt.verify(token, config.TOKEN_SECRET);
    req.user = verified;

    next();
  } catch (error) {
    res.status(400).clearCookie("ig-sess").json({ message: error }).end();
  }
};
