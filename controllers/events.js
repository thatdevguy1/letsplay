const Event = require("../models/event");
const User = require("../models/user");

async function findAllEvents(req, res) {
  try {
    const events = await Event.find({});
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
    console.log(err.message);
    res.send({ message: "Something went wrong!", response: false });
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.findOne({ _id: req.body.id });
    if (event.creator == req.cookies.userId) {
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
  console.log(req.body);
  console.log(newEvent);
  try {
    if (req.cookies.userId) {
      newEvent.creator = req.cookies.userId;
      const event = await newEvent.save();
      const currentUserId = req.cookies.userId;

      const currentUser = await User.findOneAndUpdate(
        { _id: currentUserId },
        { $push: { events: event._id } },
        { new: true }
      );

      res
        .cookie("userId", currentUserId, {
          expires: new Date(Number(new Date()) + 315360000000),
          httpOnly: false,
        })
        .send({ ...event, response: true });
    } else {
      const user = new User({ signedUp: false, events: newEvent._id });
      await user.save();

      newEvent.creator = user._id;
      const event = await newEvent.save();

      res
        .cookie("userId", user._id, {
          expires: new Date(Number(new Date()) + 315360000000),
          httpOnly: false,
        })
        .send({ ...event, response: true });
    }
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function getMyEvents(req, res) {
  try {
    const { userId } = req.cookies;
    const user = await User.findOne({ _id: userId }).populate("events");
    user.events.length > 0
      ? res.send({ myEvents: user.events, response: true })
      : res.send({ myEvents: [], response: true });
  } catch (err) {
    res.send({ message: err.message, response: false });
  }
}

async function joinEvent(req, res) {
  const handleJoin = async ({ cookies, body }) => {
    let participants;
    let updatedEvent;
    let event = await Event.findOne({ _id: body.id });
    try {
      if (cookies.userId) {
        const { userId } = cookies;
        //const events = eventIds.map((event) => event.id)

        const currentUser = await User.findOne({ _id: userId });

        // if (currentUser.events.includes(body.id)) {
        if (
          event.participants.length > 0 &&
          event.participants.filter((user) => user.userId === cookies.userId)
            .length > 0
        ) {
          return {
            resObj: {
              message: "You're already part of this event",
              response: false,
            },
          };
        }

        participants = event.participants;
        participants.push({ name: body.participantsName, userId: userId });

        updatedEvent = await Event.findOneAndUpdate(
          { _id: body.id },
          { participants: participants },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: currentUser._id },
          { $addToSet: { events: body.id } }
        );

        return {
          cookie: { name: "userId", value: currentUser._id },
          resObj: { ...updatedEvent, response: true },
        };
      }

      event = await Event.findOne({ _id: body.id });

      const user = new User({ signedUp: false, events: event._id });
      await user.save();

      participants = event.participants;
      participants.push({ name: body.participantsName, userId: user._id });

      updatedEvent = await Event.findOneAndUpdate(
        { _id: body.id },
        { participants: participants },
        { new: true }
      );

      return {
        cookie: { name: "userId", value: user._id },
        resObj: { ...updatedEvent, response: true },
      };
    } catch (err) {
      return { resObj: { message: err.message, response: false } };
    }
  };

  let payload = await handleJoin(req);

  if (Object.keys(payload).includes("cookie")) {
    res
      .cookie(payload.cookie.name, payload.cookie.value, {
        expires: new Date(Number(new Date()) + 315360000000),
        httpOnly: false,
      })
      .send(payload.resObj);
  } else {
    res.send(payload.resObj);
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
