const Post = require("../model/post");

// Create Post
const createPost = async (req, res) => {
    const { title, author, description, likes, comments } = req.body;

    try {
        const post = await Post.create({
            title,
            author,
            description,
            likes,
            comments,
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All Posts

// Read A Specific Post

// Update Post

// Delete Post

module.exports = createPost;