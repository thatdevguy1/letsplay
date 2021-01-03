import React from "react";
import "../EventInformation.scss";
import Modal from "../../../../modal/modal";
import InfoMap from "../../../../map/infoMap";
import Button from "@material-ui/core/Button";

function EventBody(props) {
  return (
    <>
      {props.eventInfo.selectedEvent &&
      Object.keys(props.eventInfo.selectedEvent).length > 0 ? (
        <div className="body-container">
          <h1>{props.eventInfo.selectedEvent.name}</h1>
          <p className="description-wrapper">
            {props.eventInfo.selectedEvent.description}
          </p>
          <div className="time-public-wrapper">
            <div className="time-wrapper">
              <span>Start time: {props.eventInfo.selectedEvent.startTime}</span>
            </div>
            <div className="public-wrapper">
              <span>
                This event is:
                {props.eventInfo.selectedEvent.public ? (
                  <span style={{ color: "blue" }}> Public</span>
                ) : (
                  <span style={{ color: "red" }}> Private</span>
                )}
              </span>
            </div>
          </div>
          <div className="map-wrapper">
            <InfoMap selectedEvent={props.eventInfo.selectedEvent} />
          </div>
          <div className="button-wrapper">
            {props.admin ? (
              <Button onClick={props.handleEdit}>Edit</Button>
            ) : (
              ""
            )}

            <Modal eventId={props.eventInfo.selectedEvent._id}>JOIN</Modal>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventBody;
