module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("new connection made");

    socket.on("join room", (eventId) => {
      socket.join(eventId);
    });
  });
};
