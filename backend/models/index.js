const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");


mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

//Agregar los modelos de la base de datos
db.examples = require("./example.model")(mongoose)
// EJEMPLO => db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
