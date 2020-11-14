let router = require("express").Router();
let userCtrl = require("../controllers/users");
let passport = require("passport");

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send({ response: false, message: "You are not logged in" });
}

router.post("/login", passport.authenticate("local"), userCtrl.login);

router.post("/register", userCtrl.register);

router.get("/getUser", checkAuthenticated, userCtrl.findUser);

router.get("/currentUser", checkAuthenticated, (req, res) => {
  res.send(req.user);
});

module.exports = router;
