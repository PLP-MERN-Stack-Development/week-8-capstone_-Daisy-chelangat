const express = require("express");
const router = express.Router();

// @route GET /api/users/:id
router.get("/:id", (req, res) => {
  res.send("Get user profile");
});

module.exports = router;
