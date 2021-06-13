const usersRouter = require("express").Router();
const User = require("../models/User");


usersRouter.post("/:name", async (req, res) => {

    const { params } = req;
    const { name } = params

    const userFound = await User.findOne({name: name})
    
    res.send({
        name: userFound.name,
        points: userFound.points
    })
});

module.exports = usersRouter;






























