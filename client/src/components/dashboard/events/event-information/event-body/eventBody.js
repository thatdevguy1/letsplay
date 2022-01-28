import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../EventInformation.scss";
import Modal from "../../../../modal/modal";
import Map from "../../../../map/Map";
import Button from "@material-ui/core/Button";
import moment from "moment";
import Chat from "./chat/Chat";
moment().format();

function EventBody(props) {
  const [joined, setJoined] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    let foundParticipant = props.eventInfo.selectedEvent.participants.find(
      (p) => user.id.includes(p.userId)
    );

    if (foundParticipant !== -1) setJoined(foundParticipant);
  }, [props.eventInfo]);

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
                <span> {props.eventInfo.selectedEvent.location.address}</span>
              </div>
              <div className="date-wrapper">
                Date:
                <span>
                  {" "}
                  {moment(props.eventInfo.selectedEvent.date).format(
                    "dddd, MMMM Do YYYY"
                  )}
                </span>
              </div>
              <div className="time-wrapper">
                Start time:
                <span> {props.eventInfo.selectedEvent.startTime}</span>
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
            <Modal
              btnStyle="success-btn"
              eventId={props.eventInfo.selectedEvent._id}
              disabled={joined}
              setJoined={setJoined}
            >
              JOIN
            </Modal>
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
          </div>
          <Chat
            selectedEvent={props.eventInfo.selectedEvent}
            userInfo={joined}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventBody;
