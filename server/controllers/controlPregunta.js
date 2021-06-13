const compruebaPregunta = require("express").Router();
const Event = require("../models/Events");

compruebaPregunta.post("/", async (req, res) => {
    const { body } = req;

    const {question, answer} = body;

    const eventFound = await Event.findOne({ question: question });

    if(eventFound == null){
        console.log("No encontre el evento");
    } else {
        if(eventFound.answer === answer)
        {
            res.send({
                question: eventFound.question,
                answer: eventFound.answer,
                pointsWin: eventFound.pointsWin
            });
        }else
        {
            res.send({
                question: eventFound.question,
                answer: eventFound.answer,
                pointsWin: 0
            });
        }
    }  

});

module.exports = compruebaPregunta;