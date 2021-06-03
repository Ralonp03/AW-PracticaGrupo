const mongoose = require("mongoose");

const { model, Schema } = mongoose;

//Falta la imagen
const cardSchema = new Schema({
  name: String,
  price: Number,
  units: Number,
  state: String
  
});

const Card = model("card", cardSchema);


module.exports = Card;