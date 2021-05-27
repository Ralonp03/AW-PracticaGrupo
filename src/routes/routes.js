const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.get('/login',(req, res) => {
    res.redirect("../public/index.html")
})

module.exports = router