const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createPost,
  getAllPosts,
  getUserPosts,
  deletePost
} = require("../controllers/postController");

// Protected: Create a new post
router.post("/", authMiddleware, createPost);

// Public: Get all posts
router.get("/", getAllPosts);

// Public: Get posts by a specific user
router.get("/user/:userId", getUserPosts);

// Protected: Delete a post
router.delete("/:postId", authMiddleware, deletePost);

module.exports = router;
