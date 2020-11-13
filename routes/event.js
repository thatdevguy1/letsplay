let router = require("express").Router();
let eventCtrl = require("../controllers/events");

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.send({ response: false, message: "You are not logged in" });
}

router.get("/getEvents", checkAuthenticated, eventCtrl.findAllEvents);

router.get("/getEvent", checkAuthenticated, eventCtrl.findEvent);

router.post("/createEvent", checkAuthenticated, eventCtrl.createEvent);

router.put("/updateEvent", checkAuthenticated, eventCtrl.updateEvent);

router.delete("/deleteEvent", checkAuthenticated, eventCtrl.deleteEvent);

router.put("/joinEvent", checkAuthenticated, eventCtrl.joinEvent);

module.exports = router;
