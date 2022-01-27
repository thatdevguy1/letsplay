const Event = require("../models/event");

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("new connection made");

    socket.on("join room", (eventId) => {
      socket.join(eventId);
    });

    //change this to a api request and trigger an emit from the controller
    socket.on("sendMessage", async ({ eventId, message, user, time }) => {
      try {
        const event = await Event.findOneAndUpdate(
          { _id: eventId },
          {
            $addToSet: {
              messages: { message, user: user.userId, name: user.name, time },
            },
          }
        );
        io.in(eventId).emit("message", {
          user: user.userId,
          name: user.name,
          message,
          time,
        });
      } catch (err) {
        socket.emit(
          "denied",
          "You must be a participant to chat in this event"
        );
      }
    });
  });
};
