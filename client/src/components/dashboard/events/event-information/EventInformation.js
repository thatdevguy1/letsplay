import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, setUser, getEvent } from "../../../../store/actions";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./EventInformation.scss";
import Modal from "../../../modal/modal";
import InfoMap from "../../../map/infoMap";
import Participants from "./participants/Participants";
import Share from "./share/Share";

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
          <div className="sidebar">
            <div className="participants-wrapper">
              <Participants eventInfo={eventInfo} />
            </div>
            <Share />
          </div>
          <div className="body-container">
            <h1>{eventInfo.selectedEvent.name}</h1>
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
                  {eventInfo.selectedEvent.public ? (
                    <span style={{ color: "blue" }}> Public</span>
                  ) : (
                    <span style={{ color: "red" }}> Private</span>
                  )}
                </span>
              </div>
            </div>
            <div className="map-wrapper">
              <InfoMap selectedEvent={eventInfo.selectedEvent} />
            </div>
            <div className="button-wrapper">
              <Modal eventId={eventInfo.selectedEvent._id}>Join</Modal>
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
