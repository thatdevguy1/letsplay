require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const initSocketListener = require("./socket-listeners/connection");

const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

let eventRoutes = require("./routes/event");
let nomRoutes = require("./routes/nominatim");
let userRoutes = require("./routes/user");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require("./config/auth"));

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", eventRoutes);
app.use("/api/nominatim", nomRoutes);
app.use("/api/user", userRoutes);

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
    const server = app.listen(port, () =>
      console.log(`app listening on port ${port}!`)
    );
    const io = require("./config/socket").init(server);
    initSocketListener(io);
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
