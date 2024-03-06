const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: true },
    comments: [{ body: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;