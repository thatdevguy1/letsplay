const User = require("../models/user");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;
const jwt = require("jsonwebtoken");

//small change
async function create(req, res) {
  console.log(req.body);
  console.log("request user from create", req.user);
  try {
    let user;
    const hashPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    if (req.user) {
      user = await User.findOneAndUpdate(
        { _id: req.user._id },
        { ...req.body, password: hashPassword },
        { new: true }
      );
    } else {
      user = await User.create({
        ...req.body,
        password: hashPassword,
      });
    }
    console.log("the user being created", user);
    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: "24h",
    });
    res.status(200).send({ token, respons: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message, response: false });
  }
}

async function find(req, res) {
  try {
    let user = await User.findOne({ _id: req.body.id }).populate("events");
    res.send({ ...user, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

//Update Token and pass token back || Might need {new: true} to get updated user
async function update(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { id: req.user._id },
      { ...req.body }
    );

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.send({ token, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Password incorrect");
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res
      .status(200)
      .send({ token, message: "Successfully Authenticated", response: true });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
}

async function logout(req, res) {
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
  create,
  find,
  update,
  login,
  register,
  logout,
};
