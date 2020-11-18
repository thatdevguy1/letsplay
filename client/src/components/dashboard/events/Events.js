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
      {eventsInfo ? (
        eventsInfo.events.map((event) => {
          return <Event key={event._id} eventData={event} />;
        })
      ) : (
        <h1>No Events Found</h1>
      )}
    </div>
  );
}

export default Events;
