const express = require('express');
const router = express.Router();
const Blog = require('../models/blog')


router.get("", (req,res) => {
    const locals = {
        title:'Nodejs Blog App',
        description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
    };
    res.render('index', {locals});
});

function insertBlogdata () {
    Blog.insertMany([
        {
            title: "Blog1",
            body: "Body1",
        },
        {
            title: "Blog2",
            body: "Body2",
        },
        {
            title: "Blog3",
            body: "Body3",
        },
        {
            title: "Blog4",
            body: "Body4",
        },
        {
            title: "Blog5",
            body: "Body5",
        }
    ])
}

insertBlogdata()

module.exports = router
