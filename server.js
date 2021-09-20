require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
//const session = require("express-session");
//const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");
//const methodOverride = require("method-override");

bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

let eventRoutes = require("./routes/event");
let nomRoutes = require("./routes/nominatim");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

//app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", eventRoutes);
app.use("/api/nominatim", nomRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
  // res.sendFile(path.join(__dirname, "index.html"));
});

/* MONGOOSE CONNECT */
const db = process.env.DB_HOST;
mongoose.Promise = global.Promise;

const startServer = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    //If a connection to the database is made we can start our server
    app.listen(port, () => console.log(`app listening on port ${port}!`));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
