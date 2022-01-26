const socket = require("../config/socket");
const Event = require("../models/event");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function findAllEvents(req, res) {
  let today = new Date();
  today.setUTCHours(0);

  try {
    const events = await Event.find({
      date: { $gte: today.toISOString() },
    });
    res.send({ events, response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function findEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.query.id });

    res.send({ ...event, response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function updateEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id });
    if (event.creator == req.cookies.userId) {
      const updatedEvent = await Event.findOneAndUpdate(
        { _id: req.body.id },
        { ...req.body }
      );

      res.send({ ...updatedEvent, response: true });
    } else {
      res.send({
        response: false,
        message: "You do not have permission to update that event",
      });
    }
  } catch (err) {
    res.send({ message: "Something went wrong!", response: false });
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id });
    if (event.creator == req.user._id) {
      await Event.deleteOne({ _id: req.body.id });
      res.send({ response: true, message: "Event Deleted", name: event.name });
    } else {
      res.send({
        message: "You do not have permission to delete that event",
        response: false,
      });
    }
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function createEvent(req, res) {
  const newEvent = new Event(req.body);
  try {
    if (req.user) {
      newEvent.creator = req.user._id;
      const event = await newEvent.save();

      await User.findOneAndUpdate(
        { _id: req.user._id },
        { $push: { events: event._id } },
        { new: true, upsert: true }
      );

      res.send({ ...event, response: true });
    } else {
      const user = new User({ signedUp: false, events: newEvent._id });
      await user.save();

      newEvent.creator = user._id;
      const event = await newEvent.save();
      const token = jwt.sign({ user }, process.env.SECRET, {});
      res.send({ ...event, token, response: true });
    }
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function getMyEvents(req, res) {
  try {
    const { _id } = req.user;
    const user = await User.findOne({ _id }).populate("events");
    user && user.events.length > 0
      ? res.send({ myEvents: user.events, response: true })
      : res.send({ myEvents: [], response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function joinEvent(req, res) {
  let participants;
  const handleJoin = async (request) => {
    let updatedEvent;
    let event = await Event.findOne({ _id: request.body.id });
    try {
      if (request.user) {
        const { _id } = request.user;
        //const events = eventIds.map((event) => event.id)

        const currentUser = await User.findOne({ _id });

        // if (currentUser.events.includes(body.id)) {
        if (
          event.participants.length > 0 &&
          event.participants.filter((user) => user.userId === user._id).length >
            0
        ) {
          return {
            message: "You're already part of this event",
            response: false,
          };
        }

        participants = event.participants;
        participants.push({ name: request.body.participantsName, userId: _id });

        updatedEvent = await Event.findOneAndUpdate(
          { _id: request.body.id },
          { participants: participants },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: currentUser._id },
          { $addToSet: { events: request.body.id } }
        );

        return {
          ...updatedEvent,
          response: true,
        };
      }

      event = await Event.findOne({ _id: request.body.id });

      const user = await new User({ signedUp: false, events: event._id });
      await user.save();

      participants = event.participants;
      participants.push({
        name: request.body.participantsName,
        userId: user._id,
      });

      updatedEvent = await Event.findOneAndUpdate(
        { _id: request.body.id },
        { participants: participants },
        { new: true }
      );

      const token = jwt.sign({ user }, process.env.SECRET, {});

      return {
        ...updatedEvent,
        response: true,
        token,
      };
    } catch (err) {
      console.log(err);
      return { message: err.message, response: false };
    }
  };

  let payload = await handleJoin(req);

  // if (Object.keys(payload).includes("cookie")) {
  if (payload.response === true) {
    socket.getIO().to(req.body.id).emit("update participants", participants);
    res.send(payload);
  } else {
    res.send(payload);
  }
}

async function removeParticipant(req, res) {
  try {
    let selectedEvent = await Event.findById(req.body.selectedEventId);
    const participantIndex = selectedEvent.participants.findIndex(
      (obj) => obj.userId === req.body.participantId
    );

    if (participantIndex >= 0) {
      selectedEvent.participants.splice(participantIndex, 1);
      const savedEvent = await selectedEvent.save();

      //Socket to remove participant from list
      socket
        .getIO()
        .to(req.body.selectedEventId)
        .emit("update participants", selectedEvent.participants);

      res.json({ updatedEvent: savedEvent, response: true });
    } else {
      res.json({
        message: "You are not part of this event",
        response: false,
      });
    }
  } catch (err) {
    res.json({ err, response: false });
  }
}

module.exports = {
  findEvent,
  updateEvent,
  deleteEvent,
  createEvent,
  findAllEvents,
  joinEvent,
  getMyEvents,
  removeParticipant,
};
