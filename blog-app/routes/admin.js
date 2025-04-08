const express = require('express')
const router = express.Router()
const adminLayout = "../views/layouts/admin";
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

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

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({username, password: hashedPassword});
            res.status(201).json({ message: "user created", user});
        } catch (error) {
            if (error.code === 11000) {
                res.status(409).json({message: "user already in use"});
            }
            res.status(500).json({message: "Internal Server Error"});
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        const user = await User.findOne({ username});
        if (!user) {
            res.status(401).json({ message: "User does not exist"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid password"});
        }
        const token = jwt.sign({userId: user._id }, jwtSecret);
        res.cookie("token", token, {httpOnly: true});
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }  
});


module.exports = router