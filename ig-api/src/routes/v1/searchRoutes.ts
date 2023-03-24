import express from "express";
import { Search } from "../../controllers/SearchController";
import { verifyToken } from "../../middlewares/verifyToken";

const SearchRouter = express.Router();

SearchRouter.get("/set/:username", verifyToken, Search.setRecentSearchUser).get(
  "/get",
  verifyToken,
  Search.getRecentSearch
);

export default SearchRouter;
