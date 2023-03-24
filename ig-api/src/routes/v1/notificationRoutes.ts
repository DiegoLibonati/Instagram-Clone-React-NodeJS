import express from "express";
import { Notification } from "../../controllers/NotificationController";
import { verifyToken } from "../../middlewares/verifyToken";

const NotificationRouter = express.Router();

NotificationRouter.put("/", verifyToken, Notification.editNotifications);

export default NotificationRouter;
