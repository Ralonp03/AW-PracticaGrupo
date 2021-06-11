const bcrypt = require("bcrypt");
const comprasRouter = require("express").Router();
const User = require("../models/User");
const Card = require("../models/Card");

comprasRouter.post("/", async (req, res) => {

    const { body } = req;

    const { nameUsuario, userPoints, name} = body;

    const cardFound = await Card.findOne({ name });
    const doc = await User.findOneAndUpdate(
        { name: nameUsuario },
        { $set: { points: userPoints }, 
            $addToSet: { cards: cardFound}},
        // If `new` isn't true, `findOneAndUpdate()` will return the
        // document as it was before it was updated.
        { new: true }
    );

    const savedDoc = await doc.save();

    res.json(savedDoc);

});

module.exports = comprasRouter;