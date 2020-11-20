let router = require("express").Router();
let eventCtrl = require("../controllers/events");

router.get("/getEvents", eventCtrl.findAllEvents);

router.get("/getEvent", eventCtrl.findEvent);

router.post("/createEvent", eventCtrl.createEvent);

router.put("/updateEvent", eventCtrl.updateEvent);

router.delete("/deleteEvent", eventCtrl.deleteEvent);

router.put("/joinEvent", eventCtrl.joinEvent);

router.get("/getMyEvents", eventCtrl.getMyEvents);

module.exports = router;
