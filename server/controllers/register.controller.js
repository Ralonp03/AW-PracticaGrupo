const bcrypt = require('bcrypt')
const registerRouter = require('express').Router()

const User = require('../models/User')

registerRouter.post('/', async (req, res) => {
    const { body }  = req

    console.log(body)
    const { name, password } = body
    
    //Comprobar que el usuario a registrar no exista
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
    
        const savedUser = await user.save()
    
        res.json(savedUser)
    }else
        res.status(401).json({error: 'Usuario ya registrado'})
})



module.exports = registerRouter