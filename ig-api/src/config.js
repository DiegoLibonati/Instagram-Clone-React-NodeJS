import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1/instagram",
  TOKEN_SECRET: process.env.TOKEN_SECRET || "EstaNoEsUnaPalabraSegura",
  CORS_ORIGIN: JSON.parse(process.env.CORS_ORIGIN) || [
    `http://localhost:${PORT}`,
  ],
};
