const cardsRouter = require("express").Router();
const Card = require("../models/Card");
const User = require("../models/User")

cardsRouter.get('/allcards/:name', async (req, res) => {
    const { params } = req

    const { name } = params

    const infoUser = await User.find({ name: name })

    console.log(infoUser.name)
})


cardsRouter.get("/:name", async (req, res) => {
    const { params } = req;
    const { name } = params;
    
    const cardFound = await Card.findOne({ name });
    res.send({
        name: cardFound.name,
        price: cardFound.price,
        units: cardFound.units,
        state: cardFound.state
    })
});

cardsRouter.put('/deleteCard/:name', async (req, res) => {

    const { body } = req
    const { cardName, cardUnits } = body

    if(cardUnits === 0){
        const doc = await Card.findOneAndUpdate({ name: cardName })
        doc.units = cardUnits
        doc.state = "inactive"
        savedDoc = await doc.save();

        res.json(savedDoc);
        
    } else {
        const doc = await Card.findOne({ name: cardName })
        doc.units = cardUnits
        await doc.save();
    
        res.json(savedDoc);
    }
})



module.exports = cardsRouter;
