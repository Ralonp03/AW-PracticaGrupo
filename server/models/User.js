const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  points: Number,
  role: String,
  collections: [
    {
      type: Schema.Types.ObjectId,
      ref: "Collection",
    },
  ],
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
  collectionState: String
});

//Se eliminan aquellos campos que no queremos representar
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const User = model("user", userSchema);

module.exports = User;
