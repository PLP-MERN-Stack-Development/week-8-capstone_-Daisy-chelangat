const express = require("express");
const router = express.Router();

// @route GET /api/notifications/:userId
router.get("/:userId", (req, res) => {
  res.send("Get notifications");
});

module.exports = router;
