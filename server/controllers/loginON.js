const bcrypt = require("bcrypt");
const loginON = require("express").Router();
const User = require("../models/User");

loginON.post("/", async (req, res) => {

  const { body } = req;
  const { name } = body;

  const userFound = await User.findOne({ name });



    
      res.send({
          name: userFound.name,
          role: userFound.role,
          points: userFound.points,
          cards:userFound.cards
      })

    

});

module.exports = loginON;
