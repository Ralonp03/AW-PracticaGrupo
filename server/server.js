require("./database/connection");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const registerRouter = require('./controllers/register.controller')
const loginRouter = require('./controllers/login.controller.js')
const usersRouter = require('./controllers/users.controller')
const cardsRouter = require('./controllers/cards.controller.js')
const comprasRouter = require('./controllers/compras.controller.js')
const collectionRouter = require('./controllers/collections.controller.js')
const adminRouter = require('./controllers/admin.controller.js')
const eventRouter = require('./controllers/events.controller')

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
app.use('/api/cards', cardsRouter)
app.use('/api/collections', collectionRouter)
app.use('/api/events', eventRouter)

//Server running
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
