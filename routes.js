const express = require("express") 

    const Post = require("./models/blog") 

    const router = express.Router() 

    router.get("/blog", async (req, res) => { 

        const posts = await Post.find() 

        res.send(posts) 

    }) 

    router.post("/blog", async (req, res) => { 

        const post = new Post({ 

            title: req.body.title, 

                 content: req.body.content, 

        }) 

        await post.save() 

        res.send(post) 

    }) 
    //hanfling single post
    router.get("/blog/:id", async (req, res) => { 

        try { 

            const post = await Post.findOne({ _id: req.params.id }) 

            res.send(post) 

        } catch { 

            res.status(404) 

            res.send({ error: "Post doesn't exist!" }) 

        } 

    })
    //update post api
    router.patch("/blog/:id", async (req, res) => { 

        try { 

            const post = await Post.findOne({ _id: req.params.id }) 

     

            if (req.body.title) { 

                post.title = req.body.title 

            } 

     

            if (req.body.content) { 

                post.content = req.body.content 

            } 

     

            await post.save() 

            res.send(post) 

        } catch { 

            res.status(404) 

            res.send({ error: "Post doesn't exist!" }) 

        } 

    })
    //deleting api
    router.delete("/blog/:id", async (req, res) => { 

        try { 

            await Post.deleteOne({ _id: req.params.id }) 

            res.status(204).send() 

        } catch { 

            res.status(404) 

            res.send({ error: "Post doesn't exist!" }) 

        } 

    })
    module.exports = router;