const comprueboEvento = require("express").Router();
const Event = require("../models/Events");

comprueboEvento.post("/", async (req, res) => {
    const { body } = req;

    const { nameUser, question, typeEvent} = body;

    var encontrado = true;
    if(typeEvent === "Event1"){
        const evento1 = await Event.findOne(
            { question: "¿De que tipo pokemon es pikachu?" , 
            users: nameUser }
        );
        const evento2 = await Event.findOne(
            { question: "¿Cual es el resultado de la siguiente operacion? 2x(2+2)/4", 
            users: nameUser }
        );
        const evento3 = await Event.findOne(
            { question: "¿De que color es el caballo blanco de santiago?", 
            users: nameUser }
        );
        const evento4 = await Event.findOne(
            { question: "¿Qué marca de deportivos usa un caballo como logo?", 
            users: nameUser }
        );
        const evento5 = await Event.findOne(
            { question: "¿Cuánto es la mitad de 2, mas 2?", 
            users: nameUser }
        );
        if(evento1 === null){
            if(evento2 === null){
                if(evento3 === null){
                    if(evento4 === null){
                        if(evento5 === null){
                            encontrado = false;
                        }
                    }
                }
            }
        }
        if(encontrado === false){
            //No se ha encontrado al usuario registrado en ninguna pregunta del evento1
            const evento2 = await Event.findOneAndUpdate(
                { question: question },
                { $push: {users: nameUser}}
            );
            if(evento2 == null){
                console.log("Evento no encontrado")
                var aux = false;
                res.send({
                    state: aux,
                })
            } else {
                console.log("Evento encontrado y actualizado");
                var aux = true;
                res.send({
                    state: aux,
                })
            }
        } else {
            //Se ha encontrado al usuario registrado en alguna pregunta del evento1
            var aux = false;
            res.send({
                state: aux,
            })
        }
    } else {
        const evento1 = await Event.findOne(
            { question: "El roer es mi trabajo,el queso mi aperitivo y el gato ha sido siempre mi más temido enemigo" , 
            users: nameUser }
        );
        const evento2 = await Event.findOne(
            { question: "Para ser más elegante no usa guante ni chaqué, solo cambia en un instante por una efe la ge", 
            users: nameUser }
        ); 
        if(evento1 === null){
            if(evento2 === null){
                encontrado = false;
            }
        }
        if(encontrado === false){
            //No se ha encontrado al usuario registrado en ninguna pregunta del evento1
            const evento2 = await Event.findOneAndUpdate(
                { question: question },
                { $push: {users: nameUser}}
            );
            if(evento2 == null){
                console.log("Evento no encontrado")
                var aux = false;
                res.send({
                    state: aux,
                })
            } else {
                console.log("Evento encontrado y actualizado");
                var aux = true;
                res.send({
                    state: aux,
                })
            }
        } else {
            //Se ha encontrado al usuario registrado en alguna pregunta del evento1
            var aux = false;
            res.send({
                state: aux,
            })
        }
    }
});

module.exports = comprueboEvento;