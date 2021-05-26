const express = require('express');
const router = express.Router();

const User = require('../models/User')




router.get('/perfil', (req, res) => {
    res.send('Página de perfil del usuario')
})


module.exports = router