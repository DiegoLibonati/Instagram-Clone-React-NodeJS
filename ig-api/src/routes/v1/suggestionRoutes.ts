import express from "express";
import { Suggestion } from "../../controllers/SuggestionController";
import { verifyToken } from "../../middlewares/verifyToken";

const SuggestionRouter = express.Router();

SuggestionRouter.get("/users", verifyToken, Suggestion.getUsers);

export default SuggestionRouter;
