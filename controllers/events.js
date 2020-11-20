const Event = require("../models/event");

async function findAllEvents(req, res) {
  try {
    const events = await Event.find({})
      .populate("creator")
      .populate("participants");
    res.send({ events, response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function findEvent(req, res) {
  console.log(req.query);
  try {
    const event = await Event.findOne({ _id: req.query.id });

    console.log(event);
    res.send({ ...event, response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
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
    res.send({ message: "Something went wrong!", response: false });
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
    res.send({ message: err.message, response: false });
  }
}

async function createEvent(req, res) {
  console.log(req.body);
  const newEvent = new Event(req.body);

  try {
    const event = await newEvent.save();

    //Gonna need to only do this if someone is signed in
    // await User.findOneAndUpdate(
    //   { _id: req.user._id },
    //   { $push: { events: event._id } }
    // );

    if (req.session.eventIds && req.session.eventIds.length > 0) {
      req.session.eventIds.push(event._doc._id);
    } else {
      req.session.eventIds = [event._doc._id];
    }
    console.log(req.session.eventIds);

    res.send({ ...event, response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function getMyEvents(req, res) {
  console.log("EventIds I have right now: ", req.session.eventIds);
  try {
    const event = await Event.find()
      .where("_id")
      .in(req.session.eventIds)
      .exec();
    console.log("Events returned to me: ", event);
    event.length > 0
      ? res.send({ myEvents: event, response: true })
      : res.send({ myEvents: [], response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
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
    res.send({ message: err.message, response: false });
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
};
