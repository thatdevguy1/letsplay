let router = require("express").Router();
let userCtrl = require("../controllers/users");
let passport = require("passport");

router.post("/login", passport.authenticate("local"), userCtrl.login);

router.post("/register", userCtrl.register);

router.get("/getUser", userCtrl.findUser);

router.get("/currentUser", (req, res) => {
  res.send(req.user);
});

module.exports = router;
