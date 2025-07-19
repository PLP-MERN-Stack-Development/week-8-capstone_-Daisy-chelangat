const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createComment,
  getCommentsByPost
} = require("../controllers/commentController");

// Create comment (protected)
router.post("/", authMiddleware, createComment);

// Get comments for a post (public)
router.get("/:postId", getCommentsByPost);

module.exports = router;
