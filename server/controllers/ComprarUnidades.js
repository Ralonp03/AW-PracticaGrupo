const bcrypt = require("bcrypt");
const comprasRouter2 = require("express").Router();
const Card = require("../models/Card");

comprasRouter2.post("/", async (req, res) => {

    const { body } = req;

    const { cardName, cardUnits} = body;

    if(cardUnits === 0){
        const doc = await Card.findOneAndUpdate(
            { name: cardName },
            { $set: { units: cardUnits, state: "inactive"} },
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was before it was updated.
            { new: true }
        );
    
        const savedDoc = await doc.save();
    
        res.json(savedDoc);
    } else {
        const doc = await Card.findOneAndUpdate(
            { name: cardName },
            { $set: { units: cardUnits } },
            // If `new` isn't true, `findOneAndUpdate()` will return the
            // document as it was before it was updated.
            { new: true }
        );
    
        const savedDoc = await doc.save();
    
        res.json(savedDoc);
    }

});

module.exports = comprasRouter2;