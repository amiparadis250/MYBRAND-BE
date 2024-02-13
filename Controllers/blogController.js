const Post = require("../models/blog");

const getBlogPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const createBlogPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            imgsrc: req.body.imgsrc,
            desc: req.body.desc,
            content: req.body.content,
        });

        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send({ error: "Invalid Request" });
    }
};

const getSingleBlogPost = async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        if (post) {
            res.send(post);
        } else {
            res.status(404).send({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const updateBlogPost = async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        if (post) {
            if (req.body.title) {
                post.title = req.body.title;
            }

            if (req.body.content) {
                post.content = req.body.content;
            }

            await post.save();
            res.send(post);
        } else {
            res.status(404).send({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

const deleteBlogPost = async (req, res) => {
    try {
        const result = await Post.deleteOne({ _id: req.params.id });
        if (result.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).send({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = {
    getBlogPosts,
    createBlogPost,
    getSingleBlogPost,
    updateBlogPost,
    deleteBlogPost,
};
