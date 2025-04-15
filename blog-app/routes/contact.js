const express = require('express')
const router = express.Router()
const contactLayout = "../views/layouts/contact";

router.get('/contact', async (req, res) => {
    try {
        const locals = {
            title:'Nodejs Blog App',
            description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
        };
        res.render("contact", {locals, layout: contactLayout})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
