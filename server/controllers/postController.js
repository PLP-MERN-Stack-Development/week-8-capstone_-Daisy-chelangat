const Post = require("../models/Post");

// @desc    Create a new post
const createPost = async (req, res) => {
  try {
    const { content, image } = req.body;

    const newPost = new Post({
      author: req.userId,
      content,
      image
    });

    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
};

// @desc    Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username avatar")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

// @desc    Get posts by a specific user
const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;

    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user's posts", error: error.message });
  }
};

// @desc    Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.userId)
      return res.status(403).json({ message: "Not authorized to delete this post" });

    await Post.findByIdAndDelete(req.params.postId);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getUserPosts,
  deletePost
};
