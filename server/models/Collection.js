const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const collectionSchema = new Schema({
  name: String,
  price: Number,
  cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Card'
  }],
  state: String
  
});

const Collection = model("collection", collectionSchema);


module.exports = Collection;