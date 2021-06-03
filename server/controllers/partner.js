const bcrypt = require('bcrypt')
const partnersRouter = require('express').Router()

const User = require('../models/User')

partnersRouter.post('/register', async (req, res) => {
    const { body }  = req
    const { name, password } = body
    
    const saltRounds = 10
    const passwdHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        name,
        password: passwdHash,
        points: 0,
        role: 'socio'
    })

    const savedUser = await user.save()

    res.json(savedUser)
})



module.exports = partnersRouter