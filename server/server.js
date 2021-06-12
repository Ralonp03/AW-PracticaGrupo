require("./database/connection");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const registerRouter = require('./controllers/register.controller')
const loginRouter = require('./controllers/login.controller.js')
const adminRouter = require('./controllers/admin.js')
const comprasRouter = require('./controllers/buyControl.js')
const comprasRouter2 = require('./controllers/ComprarUnidades.js')
const recopilarRouter = require('./controllers/RecopilarDatos.js')
const getCardRouter = require('./controllers/GetCards.js')


const app = express();

//settings
app.set("port", process.env.PORT || 8081);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Partner routes
app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)
app.use('/api/admin', adminRouter)
app.use('/api/compras', comprasRouter)
app.use('/api/compras2', comprasRouter2)
app.use('/api/recopilar', recopilarRouter)
app.use('/api/getCard', getCardRouter)


//Server running
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
