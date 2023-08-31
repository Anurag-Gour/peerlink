import express from "express";
import dotenv from "dotenv";
import post from "./routes/post.js";
import user from "./routes/user.js";
import cookieParser from "cookie-parser";
const app = express();

if (process.env.NODE_ENV != "production") {
  dotenv.config({ path: "./config/config.env" });
}

//Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);
export default app;
