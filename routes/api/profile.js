const express = require("express");
const router = express.Router();

// @route  GET api/profile/test
// @desc   Tests profile route
// @access Public route
router.get("/test", (req, res) =>
  res.json({ msg: "Hi This is profiles work..." })
);

module.exports = router;
