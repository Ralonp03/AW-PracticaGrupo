const bcrypt = require("bcrypt");
const recopilarRouter = require("express").Router();
const Card = require("../models/Card");

recopilarRouter.post("/", async (req, res) => {

    const { body } = req;

    const { name } = body;
    
    const cardFound = await Card.findOne({ name });
    res.send({
        name: cardFound.name,
        price: cardFound.price,
        units: cardFound.units
    })
});

module.exports = recopilarRouter;