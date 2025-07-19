const Comment = require("../models/Comment");
const Post = require("../models/Post");

// @desc    Create a comment
const createComment = async (req, res) => {
  try {
    const { postId, text } = req.body;

    const comment = new Comment({
      post: postId,
      author: req.userId,
      text
    });

    await comment.save();

    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
};

// @desc    Get all comments for a post
const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ post: postId })
      .populate("author", "username avatar")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error: error.message });
  }
};

module.exports = {
  createComment,
  getCommentsByPost
};
