import express from "express";
import morgan from "morgan";
import { mongooseConnection } from "./mongo.js";
import AuthRouter from "./routes/v1/authRoutes.js";

const app = express();
mongooseConnection();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/auth", AuthRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
