import express from "express";
import morgan from "morgan";
import cors from "cors";
import { mongooseConnection } from "./mongo.js";
import AuthRouter from "./routes/v1/authRoutes.js";
import UserRouter from "./routes/v1/userRoutes.js";

const app = express();
mongooseConnection();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/user", UserRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
