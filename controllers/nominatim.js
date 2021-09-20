const axios = require("axios");

async function getLatLng(req, res) {
  const API_STRING = `https://nominatim.openstreetmap.org/reverse?lat=${req.params.lat}&lon=${req.params.lng}&format=json`;
  var config = {
    method: "get",
    url: API_STRING,
  };

  try {
    let { data } = await axios(config);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function setLatLng(req, res) {
  const API_STRING = `https://nominatim.openstreetmap.org/search?q=${req.params.address}&format=json`;
  var config = {
    method: "get",
    url: API_STRING,
  };

  try {
    let { data } = await axios(config);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  setLatLng,
  getLatLng,
};
