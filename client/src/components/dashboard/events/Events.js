import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../../store/actions";
import Event from "./event/Event";
import "./Events.scss";

function Events() {
  const dispatch = useDispatch();
  const eventsInfo = useSelector((state) => state.eventsInfo);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div className="events">
      {eventsInfo.toggleMyEvents === false
        ? eventsInfo.events.map((event) => {
            return event.name.toLowerCase().includes(eventsInfo.searchEvent) &&
              event.public ? (
              <Event key={event._id} eventData={event} />
            ) : (
              ""
            );
          })
        : eventsInfo.myEvents.map((event) => {
            return (
              event.name.toLowerCase().includes(eventsInfo.searchEvent) && (
                <Event key={event._id} eventData={event} />
              )
            );
          })}
    </div>
  );
}

export default Events;
