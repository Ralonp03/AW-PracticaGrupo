const cardsRouter = require("express").Router();
const Card = require("../models/Card");
const User = require("../models/User")

cardsRouter.get('/allcards', async (req, res) => {
   
    const allCards = await Card.find({})
    
    const length = allCards.length
    
    res.send({length: length})
})

cardsRouter.get('/allcards/:name', async (req, res) => {
    const { params } = req

    const { name } = params

    const allCards = await User.find({ name: name }, 'cards')

    res.send(allCards)
})

cardsRouter.get("/getid/:id", async (req, res) => {
    const { params } = req
    const { id } = params

    const cardFound = await Card.findById(id)

    res.send(cardFound)

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

    if(cardUnits == 0){
        const doc = await Card.findOne({ name: cardName })
        doc.units = cardUnits
        doc.name = cardName
        doc.state = "inactive"
        savedDoc = await doc.save();

        res.json(savedDoc);
        
    } else {
        const doc = await Card.findOne({ name: cardName })
        doc.units = cardUnits
        doc.state = "active"
        await doc.save();
        res.json(doc);
    }
})


cardsRouter.put('/deleteCard1Unit/:name', async (req, res) => {

    const { body } = req
    const { cardName, cardUnits } = body

        const doc = await Card.findOne({ name: cardName })
        let cartasNuevas = doc.units - 1;
        if(doc.units == 1){
        doc.units = cartasNuevas
        doc.name = cardName
        doc.state = "inactive"
        savedDoc = await doc.save();

        res.json(savedDoc);
        
    } else {
        doc.units = cartasNuevas
        doc.state = "active"
        await doc.save();
        res.json(doc);
    }
})



module.exports = cardsRouter;
