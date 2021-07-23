import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getEvents } from "../../../store/actions";
import Event from "./event/Event";
import List from "@material-ui/core/List";
import "./Events.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 930,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Events() {
  const refEvent = useRef(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const eventsInfo = useSelector((state) => state.eventsInfo);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    //getting a ref to the ul element that holds the list of events and converting the html collection to an array
    let eventsArr = Array.from(refEvent.current.children);
    //using find to pick out the right event in the list based on the selectedEvents ID
    let pickedEvent = eventsArr.find(
      (ele) =>
        ele.children[0].getAttribute("data-id") === eventsInfo.selectedEvent._id
    );
    //If the the pickedEvent is populated with a truthy value then use the scrollIntoView method to scroll to the event in the list
    pickedEvent &&
      pickedEvent.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [eventsInfo]);

  return (
    <div className="events">
      <List ref={refEvent} className={classes.root}>
        {eventsInfo.toggleMyEvents === false
          ? eventsInfo.events.map((event) => {
              return event.name
                .toLowerCase()
                .includes(eventsInfo.searchEvent) && event.public ? (
                <Event
                  key={event._id}
                  eventData={event}
                  selected={
                    event._id === eventsInfo.selectedEvent._id ? true : false
                  }
                />
              ) : (
                ""
              );
            })
          : eventsInfo.myEvents.map((event) => {
              return (
                event.name.toLowerCase().includes(eventsInfo.searchEvent) && (
                  <Event
                    key={event._id}
                    eventData={event}
                    selected={
                      event._id === eventsInfo.selectedEvent._id ? true : false
                    }
                  />
                )
              );
            })}
      </List>
    </div>
  );
}

export default Events;
