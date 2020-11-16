require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo")(session);

bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

let userRoutes = require("./routes/user");
let eventRoutes = require("./routes/event");

const initializePassport = require("./config/passport");
initializePassport(passport);
const db = process.env.DB_HOST;
mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

//app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname, "client/build/index.html"));
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", userRoutes);
app.use("/api", eventRoutes);

/* MONGOOSE CONNECT */

const startServer = async () => {
  try {
    //If a connection to the database is made we can start our server
    app.listen(port, () => console.log(`app listening on port ${port}!`));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
