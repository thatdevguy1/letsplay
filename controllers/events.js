const Event = require("../models/event");
const User = require("../models/user");

async function findAllEvents(req, res) {
  try {
    const events = await Event.find({}).populate("creator");
    res.send({ ...events, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function findEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id });
    res.send({ ...event, response: true });
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function updateEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id }).populate("creator");
    if (event.creator.username == req.user.username) {
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
    console.log(err.message);
    res.status(500).send({ message: "Something went wrong!", response: false });
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id }).populate("creator");
    if (event.creator.username == req.user.username) {
      await Event.deleteOne({ _id: req.body.id });
      res.send({ response: true, message: "Event Deleted" });
    } else {
      res.send({
        message: "You do not have permission to delete that event",
        response: false,
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

async function createEvent(req, res) {
  const newEvent = new Event({ ...req.body, creator: req.user._id });

  try {
    const event = await newEvent.save();
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { events: event._id } }
    );
    res.send({ ...event, response: true });
  } catch (err) {
    res.status(500).send({ message: err, response: false });
  }
}

async function joinEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id });
    const participants = event.participants;

    if (participants.includes(req.user._id)) {
      res.send("User already joined this event");
    } else {
      participants.push(req.user._id);
      await User.findOneAndUpdate(
        { _id: req.user._id },
        { $push: { events: req.body.id } }
      );
      const updatedEvent = await Event.findOneAndUpdate(
        { _id: req.body.id },
        { participants: participants }
      );
      res.send({ ...updatedEvent, response: true });
    }
  } catch (err) {
    res.status(500).send({ message: err.message, response: false });
  }
}

module.exports = {
  findEvent,
  updateEvent,
  deleteEvent,
  createEvent,
  findAllEvents,
  joinEvent,
};
