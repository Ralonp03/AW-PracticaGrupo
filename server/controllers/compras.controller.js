const comprasRouter = require("express").Router();
const User = require("../models/User");
const Card = require("../models/Card");

comprasRouter.post("/", async (req, res) => {
    const { body } = req;
    const { nameUsuario, userPoints, name} = body;

    const cardFound = await Card.findOne({ name });
    
    const doc = await User.findOne({ name: nameUsuario })
    doc.points = userPoints;
    doc.cards.push(cardFound)
    await doc.save();
    res.json(doc);
});




module.exports = comprasRouter;