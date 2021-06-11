const bcrypt = require("bcrypt");
const getCardRouter = require("express").Router();
const Card = require("../models/Card");
var ObjectId = require('mongodb').ObjectId; 


getCardRouter.post("/", async (req, res) => {

    const { body } = req;

    const { name } = body;
    var o_id = new ObjectId(name);
    const cardFound = await Card.findOne({_id :  o_id })
    res.send({
        name: cardFound.name,
        price: cardFound.price,
        units: cardFound.units
    })
});

module.exports = getCardRouter;