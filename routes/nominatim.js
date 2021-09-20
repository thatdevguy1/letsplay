let router = require("express").Router();
let nomCtrl = require("../controllers/nominatim");

router.get("/getLatLng/:lat/:lng", nomCtrl.getLatLng);

router.get("/setLatLng/:address", nomCtrl.setLatLng);

module.exports = router;
