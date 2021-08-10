import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signOut,
  setUser,
  getEvent,
  deleteEvent,
} from "../../../../store/actions";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./EventInformation.scss";
import Modal from "../../../modal/modal";
import Participants from "./participants/Participants";
import Share from "./share/Share";
import EventBody from "./event-body/eventBody";
import EditEvent from "./edit-event/editEvent";

function EventInformation() {
  const eventInfo = useSelector((state) => state.eventsInfo);
  const [editable, setEditable] = useState(false);
  const [admin, setAdmin] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(eventInfo.selectedEvent).length === 0) {
      //eventInfo.creator ==
      dispatch(getEvent(history.location.search.split("=")[1]));
    }
  }, []);

  useEffect(() => {
    let cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    cookieValue && cookieValue.includes(eventInfo.selectedEvent.creator)
      ? setAdmin(true)
      : setAdmin(false);
  }, [eventInfo]);

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const handleDelete = () => {
    dispatch(deleteEvent({ id: eventInfo.selectedEvent._id }));
    history.push(`/`);
  };

  return (
    <>
      {eventInfo.selectedEvent &&
      Object.keys(eventInfo.selectedEvent).length > 0 ? (
        <div className="eventInformation">
          <div className="sidebar">
            <div className="participants-wrapper">
              <Participants eventInfo={eventInfo} />
            </div>
            <Share eventId={history.location.search.split("=")[1]} />
          </div>
          {editable ? (
            <EditEvent eventInfo={eventInfo} toggleEditMode={toggleEdit} />
          ) : (
            <EventBody
              eventInfo={eventInfo}
              admin={admin}
              handleEdit={toggleEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventInformation;
