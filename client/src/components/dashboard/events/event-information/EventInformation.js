import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, setUser, getEvent } from "../../../../store/actions";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./EventInformation.scss";
import Modal from "../../../modal/modal";

function EventInformation() {
  const eventInfo = useSelector((state) => state.eventsInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(history.location.search.split("=")[1]);

    if (Object.keys(eventInfo.selectedEvent).length === 0) {
      dispatch(getEvent(history.location.search.split("=")[1]));
    }
  }, []);

  return (
    <>
      {eventInfo.selectedEvent &&
      Object.keys(eventInfo.selectedEvent).length > 0 ? (
        <div className="eventInformation">
          <h1>{eventInfo.selectedEvent.name}</h1>
          <div className="participants-wrapper">
            <h3>Participants</h3>
            <div className="participants-list">
              {eventInfo.selectedEvent.participants.length > 0
                ? eventInfo.selectedEvent.participants.map(
                    (participant, idx) => {
                      return <span key={idx}>{participant}</span>;
                    }
                  )
                : ""}
            </div>
          </div>
          <div className="body-container">
            <p className="description-wrapper">
              {eventInfo.selectedEvent.description}
            </p>
            <div className="time-public-wrapper">
              <div className="time-wrapper">
                <span>Start time: {eventInfo.selectedEvent.startTime}</span>
              </div>
              <div className="public-wrapper">
                <span>
                  This event is:
                  {eventInfo.selectedEvent.public ? " Public" : " Private"}
                </span>
              </div>
            </div>
            <div className="map-wrapper">MAP</div>
            <div className="button-wrapper">
              <button>Share</button>
              <Modal eventId={eventInfo.selectedEvent._id}>Accept</Modal>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventInformation;
