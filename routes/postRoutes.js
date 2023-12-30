import express from "express";
import { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getFeedPosts } from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";
import { getUserPosts } from "../controllers/postController.js";

const router =express.Router();

router.post("/create", protectRoute, createPost)
router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router