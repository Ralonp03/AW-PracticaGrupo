const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const eventSchema = new Schema({
  question: String,
  pointsWin: Number,
  answer: String,
});

//Se eliminan aquellos campos que no queremos representar
eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Event = model("event", eventSchema);

module.exports = Event;
