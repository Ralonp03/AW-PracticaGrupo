require("./database/connection");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const partnersRouter = require('./controllers/partner.js')

const app = express();

//settings
app.set("port", process.env.PORT || 8081);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Partner routes
app.use('/api/partners', partnersRouter)

//Server running
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
