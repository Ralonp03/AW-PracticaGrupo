require("./database/connection");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const registerRouter = require('./controllers/register.controller')
const loginRouter = require('./controllers/login.controller.js')
const adminRouter = require('./controllers/admin.js')
const comprasRouter = require('./controllers/buyControl.js')
const usersRouter = require('./controllers/users.controller')
const eventsRouter = require('./controllers/events.controller')
////////////////////////////////////////////////////////////////////////////
// const compruebaPregunta = require('./controllers/ControlPregunta.js')
// const bonificacionRouter = require('./controllers/bonificacion.js')
// const compruebaAdivinanza = require('./controllers/controlAdivinanza.js')
// const comprueboEvento = require('./controllers/controladorEvento.js')


const app = express();

//settings
app.set("port", process.env.PORT || 8081);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)
app.use('/api/users' , usersRouter)
app.use('/api/admin', adminRouter)
app.use('/api/compras', comprasRouter)
// app.use('/api/cards', cardsRouter)
// app.use('/api/collections', collectionRouter)
app.use('/api/events', eventsRouter)

//////////////////////////////////////////////////////////////



//Server running
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
