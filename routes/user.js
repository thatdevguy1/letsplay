let router = require("express").Router();
let userCtrl = require("../controllers/users");

//small change
router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.post("/signup", userCtrl.create);

router.get("/getUser", userCtrl.find);

// router.get("/currentUser", (req, res) => {
//   res.send({ user: { ...req.user._doc, response: true } });
// });

module.exports = router;
