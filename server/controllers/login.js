const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (req, res) => {

  const { body } = req;

  const { name, password } = body;

  const userFound = await User.findOne({ name });

  const passwordCorrect =
    userFound === null
      ? false
      : await bcrypt.compare(password, userFound.password);

    if(!passwordCorrect){
        res.status(401).json({error: 'Invalid user or password'})
    }else{
      res.send({
          name: userFound.name,
          role: userFound.role
      })

    }

});

module.exports = loginRouter;
