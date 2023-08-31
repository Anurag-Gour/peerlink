import express from "express";
import {
  deleteUserProfile,
  followUser,
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
  updatePassword,
  updateProfile,
  viewUserProfile,
  viewmyProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/user/register-user", registerUser);
router.post("/user/login-user", loginUser);
router.get("/user/logout-user", logoutUser);
router.get("/user/follow-user/:id", isAuthenticated, followUser);
router.put("/user/update-password", isAuthenticated, updatePassword);
router.put("/user/update-profile", isAuthenticated, updateProfile);
router.delete("/user/delete-profile", isAuthenticated, deleteUserProfile);
router.get("/user/my-profile", isAuthenticated, viewmyProfile);
router.get("/user/user-profile/:id", isAuthenticated, viewUserProfile);
router.get("/user/all-users", isAuthenticated, getAllUsers);
export default router;
