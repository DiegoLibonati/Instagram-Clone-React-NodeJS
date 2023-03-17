import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { mongooseConnection } from "./mongo";
import AuthRouter from "./routes/v1/authRoutes";
import UserRouter from "./routes/v1/userRoutes";
import PublicationRouter from "./routes/v1/publicationRouter";
import config from "./config";

const app: Express = express();
mongooseConnection();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: config.CORS_ORIGIN,
  })
);

//Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/publication", PublicationRouter);
app.use("/api/v1/images", express.static("src/images"));
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(404).json({ message: "Route not found" });
});

export default app;
