const bcrypt = require("bcrypt");
const adminRouter = require("express").Router();
const Card = require("../models/Card");

adminRouter.post("/", async (req, res) => {

    const { body } = req;

    const { cardUnits, cardPrice, cardName } = body;

    if(cardUnits === 0){
        const cardFound = await Card.findOneAndUpdate(
            { name: cardName },
            { $set: { price: cardPrice, units: cardUnits, state:  "inactive"} },
            //{ $set: { units: cardUnits }},
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was before it was updated.
            { new: true }
        );
        const savedDoc = await cardFound.save();
    
        res.json(savedDoc);
    } else {
        const cardFound = await Card.findOneAndUpdate(
            { name: cardName },
            { $set: { price: cardPrice, units: cardUnits, state:  "active"} },
            //{ $set: { units: cardUnits }},
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was before it was updated.
            { new: true }
        );
        const savedDoc = await cardFound.save();
    
        res.json(savedDoc);
    }
});

module.exports = adminRouter;