import React, { useEffect, useState } from "react";
import "../EventInformation.scss";
import Modal from "../../../../modal/modal";
import Map from "../../../../map/Map";
import Button from "@material-ui/core/Button";
import moment from "moment";

moment().format();

function EventBody(props) {
  const [joined, setJoined] = useState(false);
  useEffect(() => {
    let cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    let foundParticipant = props.eventInfo.selectedEvent.participants.some(
      (p) => cookieValue.includes(p.userId)
    );

    setJoined(foundParticipant);
  }, []);

  return (
    <>
      {props.eventInfo.selectedEvent &&
      Object.keys(props.eventInfo.selectedEvent).length > 0 ? (
        <div className="body-container">
          <div className="map-wrapper">
            <Map type="displayLocation" />
          </div>
          <div className="event-details">
            <p className="description-wrapper">
              {props.eventInfo.selectedEvent.description}
            </p>
            <div className="time-public-wrapper">
              <div className="address-wrapper">
                Address:
                <span style={{ color: "white" }}>
                  {" "}
                  {props.eventInfo.selectedEvent.location.address}
                </span>
              </div>
              <div className="date-wrapper">
                Date:
                <span style={{ color: "white" }}>
                  {" "}
                  {moment(props.eventInfo.selectedEvent.date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </span>
              </div>
              <div className="time-wrapper">
                Start time:
                <span style={{ color: "white" }}>
                  {" "}
                  {props.eventInfo.selectedEvent.startTime}
                </span>
              </div>
              <div className="public-wrapper">
                <span>
                  This is a
                  {props.eventInfo.selectedEvent.public ? (
                    <span style={{ color: "blue" }}> public </span>
                  ) : (
                    <span style={{ color: "red" }}> private </span>
                  )}
                  event
                </span>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            {props.admin ? (
              <div className="admin-btns">
                <Button onClick={props.handleEdit}>Edit</Button>
                <Button className="warning-btn" onClick={props.handleDelete}>
                  Delete
                </Button>
              </div>
            ) : (
              ""
            )}

            <Modal
              btnStyle="success-btn"
              eventId={props.eventInfo.selectedEvent._id}
              disabled={joined}
              setJoined={setJoined}
            >
              JOIN
            </Modal>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventBody;
