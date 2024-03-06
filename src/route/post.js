const express = require("express");
const router = express.Router();
const createPost = require("../controller/post");

// http://localhost:4000/ (POST)
router.post("/", createPost);

module.exports = router;