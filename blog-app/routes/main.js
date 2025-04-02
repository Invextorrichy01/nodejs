const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')


router.get("", async (req,res) => {
    try{
        const locals = {
            title:'Nodejs Blog App',
            description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
        };
        const data = await Blog.find();
    res.render('index', {locals, data });
    }catch (error) {
        console.log(error);
    }
});
// A route to get a particular blog
router.get("/blog/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Blog.findById({_id: id});
        const locals = {
            title: data.title,
            description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
        };
    res.render("blog", {locals, data });
    }catch (error) {
        console.log(error);
    }
});

module.exports = router
