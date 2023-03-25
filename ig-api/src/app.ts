import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { mongooseConnection } from "./mongo";
import AuthRouter from "./routes/v1/authRoutes";
import UserRouter from "./routes/v1/userRoutes";
import PublicationRouter from "./routes/v1/publicationRoutes";
import config from "./config";
import FeedRouter from "./routes/v1/feedRoutes";
import FollowRouter from "./routes/v1/followRoutes";
import SearchRouter from "./routes/v1/searchRoutes";
import NotificationRouter from "./routes/v1/notificationRoutes";
import LikeRouter from "./routes/v1/likeRoutes";

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
app.use("/api/v1/feed", FeedRouter);
app.use("/api/v1/follow", FollowRouter);
app.use("/api/v1/search", SearchRouter);
app.use("/api/v1/notification", NotificationRouter);
app.use("/api/v1/like", LikeRouter);
app.use("/api/v1/images", express.static("src/images"));
app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(404).json({ message: "Route not found" });
});

export default app;
