const usersRouter = require("express").Router();
const User = require("../models/User");

usersRouter.get('/allusers', async (req, res) => {

    const usersActive = await User.find({})
    
    const length = usersActive.length
    
    res.send({length: length})
})

usersRouter.get("/:name", async (req, res) => {

    const { params } = req;
    const { name } = params

    const userFound = await User.findOne({name: name})
    
    res.send({
        name: userFound.name,
        points: userFound.points
    })
});

module.exports = usersRouter;






























