const compruebaPregunta = require("express").Router();
const Event = require("../models/Events");

compruebaPregunta.post("/", async (req, res) => {
    console.log("paso3");
    const { body } = req;

    const {question, answer} = body;

    console.log(question);
    console.log(answer);

    const eventFound = await Event.findOne({ question: question });

    if(eventFound == null){
        console.log("No encontre el evento");
    } else {
        if(eventFound.answer === answer)
        {
            console.log("Bien");
        }else
        {
            console.log("mal");
        }
        res.send({
            question: eventFound.question,
            answer: eventFound.answer,
            pointsWin: eventFound.pointsWin
        });
    }  

});

module.exports = compruebaPregunta;