const comprasRouter = require("express").Router();
const User = require("../models/User");
const Card = require("../models/Card");

comprasRouter.post("/", async (req, res) => {
    const { body } = req;
    const { nameUsuario, userPoints, name} = body;

    const cardFound = await Card.findOne({ name });
    if(name == "Coleccion1")
    {
        let listaCoches = ["Coche1","Coche2","Coche3","Coche4","Coche5","Coche6","Coche7","Coche8","Coche9","Coche10"];
        const doc = await User.findOne({ name: nameUsuario });
        for(let i = 0;i < listaCoches.length;i++)
        {
            let cardFound = await Card.findOne({ name: listaCoches[i] });
            doc.cards.push(cardFound)
        }
      
        doc.points = userPoints;
        await doc.save();
        res.json(doc);
    }else if(name == "Coleccion2")
    {
        let listaPokemones = ["Pokemon1","Pokemon2","Pokemon3","Pokemon4","Pokemon5","Pokemon6","Pokemon7","Pokemon8","Pokemon9","Pokemon10"];
        const doc = await User.findOne({ name: nameUsuario });
        for(let i = 0;i < listaPokemones.length;i++)
        {
            let cardFound = await Card.findOne({ name: listaPokemones[i] });
            doc.cards.push(cardFound)
        }
      
        doc.points = userPoints;
        await doc.save();
        res.json(doc);
    }else{
        let doc = await User.findOne({ name: nameUsuario })
        doc.points = userPoints;
        doc.cards.push(cardFound)
        await doc.save();
        res.json(doc);
    }
});




module.exports = comprasRouter;