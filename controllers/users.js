const User = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");

//small change
async function createUser(req, res) {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashPassword });
    const user = await newUser.save();

    res.send({ ...user, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function findUser(req, res) {
  try {
    let user = await User.findOne({ _id: req.body.id }).populate("events");
    delete user._doc.password;
    res.send({ ...user, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { id: req.body.id },
      { ...req.body }
    );

    res.send({ ...user, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function login(req, res) {
  res.send({
    message: "Successfully Authenticated",
    response: true,
    user: req.user,
  });
}

async function logout(req, res) {
  req.logout();
  res.send({
    message: "Successfully logged out",
    response: true,
  });
}

async function register(req, res) {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send({ message: "User Created", response: true });
    }
  });
}

module.exports = {
  createUser,
  findUser,
  updateUser,
  login,
  register,
  logout,
};
