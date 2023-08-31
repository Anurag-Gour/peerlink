import express from "express";
import {
  createPost,
  deletePost,
  getPostOfFollowing,
  likeAndDislikePost,
  updateCaption,
} from "../controllers/post.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/post/create-post", isAuthenticated, createPost);
router.get("/post/like-dislike-post/:id", isAuthenticated, likeAndDislikePost);
router.delete("/post/delete-post/:id", isAuthenticated, deletePost);
router.get("/post/get-following-post", isAuthenticated, getPostOfFollowing);
router.put("/post/update-caption/:id", isAuthenticated, updateCaption);
export default router;
