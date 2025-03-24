const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    res.send('Hello Clurix Tech');
});

module.exports = router