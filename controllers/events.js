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
  const newEvent = new Event(req.body);

  try {
    const event = await newEvent.save();

    if (req.cookies.userId) {
      const currentUserId = req.cookies.userId;

      const currentUser = await User.findOneAndUpdate(
        { _id: currentUserId },
        { $push: { events: event._id } },
        { new: true }
      );

      res
        .cookie("userId", currentUserId, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
        })
        .send({ ...event, response: true });
    } else {
      const user = new User({ signedUp: false, events: event._id });
      await user.save();

      res
        .cookie("userId", user._id, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
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
  // console.log(req.body);
  // try {
  //   let event;
  //   let participants;

  //   if (req.cookies.eventIds) {
  //     const eventIds = req.cookies.eventIds;

  //     if (eventIds.includes(req.body.id)) {
  //       res.send({
  //         message: "You're already part of this event",
  //         response: false,
  //       });
  //     } else {
  //       event = await Event.findOne({ _id: req.body.id });
  //       participants = event.participants;
  //       participants.push(req.body.participantsName);

  //       updatedEvent = await Event.findOneAndUpdate(
  //         { _id: req.body.id },
  //         { participants: participants },
  //         { new: true }
  //       );
  //       eventIds.push(event._id);
  //       res
  //         .cookie("eventIds", eventIds, {
  //           expires: new Date(Date.now() + 900000),
  //           httpOnly: true,
  //         })
  //         .send({ ...updatedEvent, response: true });
  //     }
  //   } else {
  //     event = await Event.findOne({ _id: req.body.id });
  //     participants = event.participants;
  //     participants.push(req.body.participantsName);

  //     updatedEvent = await Event.findOneAndUpdate(
  //       { _id: req.body.id },
  //       { participants: participants },
  //       { new: true }
  //     );
  //     res
  //       .cookie("eventIds", [event._id], {
  //         expires: new Date(Date.now() + 900000),
  //         httpOnly: true,
  //       })
  //       .send({ ...updatedEvent, response: true });
  //   }

  //   console.log(updatedEvent);
  // } catch (err) {
  //   res.send({ message: err.message, response: false });
  // }

  const handleJoin = async ({ cookies, body }) => {
    let event;
    let participants;
    let updatedEvent;

    try {
      if (cookies.userId) {
        const { userId } = cookies;
        //const events = eventIds.map((event) => event.id)

        const currentUser = await User.findOne({ _id: userId });

        if (currentUser.events.includes(body.id)) {
          return {
            resObj: {
              message: "You're already part of this event",
              response: false,
            },
          };
        }

        event = await Event.findOne({ _id: body.id });
        participants = event.participants;
        participants.push(body.participantsName);

        updatedEvent = await Event.findOneAndUpdate(
          { _id: body.id },
          { participants: participants },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: currentUser._id },
          { $push: { events: body.id } }
        );

        return {
          cookie: { name: "userId", value: currentUser._id },
          resObj: { ...updatedEvent, response: true },
        };
      }

      event = await Event.findOne({ _id: body.id });
      participants = event.participants;
      participants.push(body.participantsName);

      const user = new User({ signedUp: false, events: event._id });
      await user.save();

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
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
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
