require("dotenv").config();
const mongoose = require("mongoose");
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

const connectionString = `mongodb+srv://${user}:${password}@cluster0.hp7pp.mongodb.net/kiosko?authSource=admin&replicaSet=atlas-alyq91-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;

//mongodb connection
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log("Database connection failed", err));
