const Event = require("../models/event");

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

    if (req.cookies.eventIds) {
      const eventIds = req.cookies.eventIds;

      eventIds.push({ id: event._id, creator: true });

      res
        .cookie("eventIds", eventIds, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
        })
        .send({ ...event, response: true });
    } else {
      res
        .cookie("eventIds", [{ id: event._id, creator: true }], {
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
    const eventIdArray = req.cookies.eventIds.map((event) => event.id);
    const event = await Event.find().where("_id").in(eventIdArray).exec();

    event.length > 0
      ? res.send({ myEvents: event, response: true })
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
      if (cookies.eventIds) {
        const eventIds = cookies.eventIds;
        const events = eventIds.map((event) => event.id);
        if (events.includes(body.id)) {
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

        eventIds.push(event._id);

        return {
          cookie: { name: "eventIds", value: eventIds },
          resObj: { ...updatedEvent, response: true },
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

      return {
        cookie: { name: "eventIds", value: event._id },
        resObj: { ...updatedEvent, response: true },
      };
    } catch (err) {
      return { message: err.message, response: false };
    }
  };

  let payload = await handleJoin(req);

  if (Object.keys(payload).includes("cookie")) {
    res
      .cookie(
        payload.cookie.name,
        [{ id: payload.cookie.value, creator: false }],
        {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
        }
      )
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
