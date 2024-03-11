const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require("../controller/post");
const { authMiddleware } = require("../middleware/authMiddleware");

// http://localhost:4000/api/posts/ (POST)
router.post("/", authMiddleware, createPost);
// http://localhost:4000/api/posts/ (GET)
router.get("/", getAllPosts);
// http://localhost:4000/api/posts/<object_id> (GET)
router.get("/:id", getPost);
// http://localhost:4000/api/posts/<object_id> (PATCH)
router.patch("/:id", authMiddleware, updatePost)
// http://localhost:4000/api/posts/<object_id> (DELETE)
router.delete("/:id", authMiddleware, deletePost)

module.exports = router;
