const eventsRouter = require("express").Router();
const Event = require('../models/Event');
const User = require('../models/User');

eventsRouter.post('/compruebapregunta', async(req, res) => {
    const { question, answer} = req.body;

    const evento = await Event.findOne({ question: question });
    
    evento == null && console.log("Evento no encontrado")

    if(evento.answer == answer ){
        res.send({
            state: "correct",
            pointsWin: evento.pointsWin
        })
    }else{
        res.send({
            state: "incorrect",
        })
    }
})


eventsRouter.post('/comprueboUsuario', async(req, res) => {
    const { body } = req
    const { nameUser, question, typeEvent } = body
    const eventsFound = await Event.find({ belongs_to:typeEvent })
    let aux = false;
    for(let event of eventsFound){
        if(event.users.includes(nameUser)){
            aux = true;
        }
    }

    if(aux === false){
        const eventFound = await Event.findOne({ question:question })
        try{
            eventFound.users.push(nameUser)
            await eventFound.save()
            res.send({state: true })
        }catch(err){
            console.log("ERROR: ", err.message )
        }
    } else {
        res.send({state: false});
    }
    
})


eventsRouter.post("/bonificacion", async (req, res) =>{
    const { body } = req;

    const { nameUser, pointsUser } = body;

    const doc = await User.findOne(
        { name: nameUser }
    );
    
    doc.points = pointsUser;
    await doc.save();

    res.json(doc);
})

eventsRouter.post("/compruebaAdivinanza", async (req, res) =>{

    const { question, answer} = req.body;

    const evento = await Event.findOne({ question: question });
    
    evento == null && console.log("Evento no encontrado")

    if(evento.answer == answer ){
        res.send({
            state: "correct",
            pointsWin: evento.pointsWin
        })
    }else{
        res.send({
            state: "incorrect",
        })
    }

})

module.exports = eventsRouter;
