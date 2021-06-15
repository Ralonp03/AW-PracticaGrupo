require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async(req, res) => {

    const { body } = req;
    const { name, password } = body;

    const userFound = await User.findOne({ name });

    const passwordCorrect =
        userFound === null ?
        false :
        await bcrypt.compare(password, userFound.password);

    if (!passwordCorrect) {
        res.json({ error: 'Invalid user or password' })
    } else {

        const userToken = {
            id: userFound._id,
            name: userFound.name
        }

        const token = jwt.sign(userToken, process.env.SECRET)




        res.send({
            name: userFound.name,
            role: userFound.role,
            points: userFound.points,
            cards: userFound.cards,
            token
        })

    }

});

module.exports = loginRouter;