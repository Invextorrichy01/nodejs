const express = require('express');
const router = express.Router();


router.get("", (req,res) => {
    const locals = {
        title:'Nodejs Blog App',
        description:"A Nodejd Blog App built with Nodejs, Express and MongoDB",
    };
    res.render('index', {locals});
});

module.exports = router
