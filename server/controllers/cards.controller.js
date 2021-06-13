const cardsRouter = require("express").Router();
const Card = require("../models/Card");

cardsRouter.get("/:name", async (req, res) => {
    const { params } = req;
    const { name } = params;
    
    const cardFound = await Card.findOne({ name });
    res.send({
        name: cardFound.name,
        price: cardFound.price,
        units: cardFound.units
    })
});

module.exports = cardsRouter;