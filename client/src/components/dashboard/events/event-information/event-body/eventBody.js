import React from "react";
import "../EventInformation.scss";
import Modal from "../../../../modal/modal";
import Map from "../../../../map/Map";
import Button from "@material-ui/core/Button";

function EventBody(props) {
  return (
    <>
      {props.eventInfo.selectedEvent &&
      Object.keys(props.eventInfo.selectedEvent).length > 0 ? (
        <div className="body-container">
          <h1>{props.eventInfo.selectedEvent.name}</h1>
          <div className="map-wrapper">
            <Map type="displayLocation" />
          </div>
          <div className="event-details">
            <p className="description-wrapper">
              {props.eventInfo.selectedEvent.description}
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              vero omnis non dicta modi voluptate adipisci autem unde sit,
              excepturi molestias voluptatem nesciunt repellendus, recusandae,
              consequatur nisi facere itaque atque perferendis! Deserunt culpa
              harum aliquid ab incidunt rem voluptate vero eaque voluptatem
              porro natus dicta corporis vel earum odio molestias error
              voluptatibus, eius qui? Similique blanditiis quae ipsam laboriosam
              omnis dolores quod odit voluptatum tenetur porro. Maxime quo
              expedita amet quaerat. Consequatur officia consectetur eius maxime
              porro eum atque repudiandae, velit nihil harum tempora nesciunt
              consequuntur quasi, voluptas animi delectus ratione sit et,
              commodi perspiciatis. Iure vitae natus dolor, at est, reiciendis
              totam iste earum sapiente itaque reprehenderit, iusto labore
              perspiciatis pariatur? Deleniti incidunt aliquam eaque praesentium
              corrupti esse rem consectetur, id tenetur, fuga veniam ipsam
              accusantium consequuntur sunt aliquid voluptatibus! Exercitationem
              nulla quas modi dolore veritatis possimus, perspiciatis rem! */}
            </p>
            <div className="time-public-wrapper">
              <div className="date-wrapper">Date:</div>
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
