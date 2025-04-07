const express = require('express')
const router = express.Router()
const adminLayout = "../views/layouts/admin";

router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin Page",
            description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
        };
        res.render("admin/index", { locals, layout: adminLayout});
    } catch (error) {
        console.log(error);
    }
});


module.exports = router