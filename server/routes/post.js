import express from "express";
import {
  commentOnPost,
  createPost,
  deleteComment,
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
router.put("/post/comment/:id", isAuthenticated, commentOnPost);
router.delete("/post/delete-comment/:id", isAuthenticated, deleteComment);
export default router;
