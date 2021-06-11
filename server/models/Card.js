const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId; 

const { model, Schema } = mongoose;

//Falta la imagen
const cardSchema = new Schema({
  _id : ObjectId,
  name: String,
  price: Number,
  units: Number,
  state: String
  
});

const Card = model("card", cardSchema);


module.exports = Card;