const openSocket = require("socket.io-client");

let socket;

module.exports = {
  init: () => {
    socket = openSocket("/");
    return socket;
  },
  getSocket: () => socket,
};
