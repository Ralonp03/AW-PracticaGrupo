require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const registerRouter = require('express').Router()

const User = require('../models/User')

registerRouter.post('/', async (req, res) => {
    const { body }  = req
    const { name, password } = body
    
    const userExist = await User.findOne({ name })

    if(!userExist){
        const saltRounds = 10
        const passwdHash = await bcrypt.hash(password, saltRounds)
    
        const user = new User({
            name,
            password: passwdHash,
            points: 300,
            role: 'socio'
        })
    
        await user.save()

        const userToken = {
            id : userFound._id,
            name: userFound.name
        }
        
        const token = jwt.sign(userForToken, process.env.SECRET)
    
        res.send({
            name: user.name,
            role: user.role,
            points: user.points,
            cards:user.cards,
            token 
        })
    }else
        res.status(401).json({error: 'Usuario ya registrado'})
})



module.exports = registerRouter