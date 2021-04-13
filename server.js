require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const DBNAME = process.env.DBNAME;

const app = express();

mongoose.set("useFindAndModify", false);

app.use("/public", express.static(path.join(__dirname, "public")));

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",

  ],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));









if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@ticketdbcluster.aocr7.azure.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT);
    console.log("Connected to DB and listening on port: " + PORT);
    console.log(process.env.NODE_ENV);
  })
  .catch(err => {
    console.log(err);
  });
