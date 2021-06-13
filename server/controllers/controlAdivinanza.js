const compruebaAdivinanza = require("express").Router();
const Event = require("../models/Events");

compruebaAdivinanza.post("/", async (req, res) => {
    const { body } = req;

    const { question, answer} = body;

    const evento = await Event.findOne({ question: question });
    if(evento == null)
    {
        console.log("Evento no encontrado")
    }

    var aux = "false";
    if(evento.answer === answer)
    {
        aux = "true";
    }else
    {
        aux = "false";
    }

 
    res.send({
        state: aux,
        pointsWin: evento.pointsWin
    })

});

module.exports = compruebaAdivinanza;