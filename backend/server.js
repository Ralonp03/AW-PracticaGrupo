const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");

const app = express();

// const corsOptions = {
//   origin: "http://localhost:8081",
// };

//DB connection
db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//Settigns
app.set("port", process.env.PORT || 3001);

//Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// set port, listen for requests
app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
