import React, { useEffect } from "react";
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const eventsInfo = useSelector((state) => state.eventsInfo);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div className="events">
      <List className={classes.root}>
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
