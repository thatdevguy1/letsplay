import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut, setUser, getEvent } from "../../../../store/actions";
import axios from "axios";
import { useHistory } from "react-router-dom";

function EventInformation() {
  const eventInfo = useSelector((state) => state.eventsInfo);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    authenticateCurrentUser();

    console.log(history.location.search.split("=")[1]);

    if (Object.keys(eventInfo.selectedEvent).length === 0) {
      dispatch(getEvent(history.location.search.split("=")[1]));
    }
  }, []);

  const authenticateCurrentUser = async () => {
    let currentUser = await axios.get(
      process.env.REACT_APP_BASE_API + "/currentUser"
    );

    if (currentUser.data.response === false) {
      dispatch(signOut());
      history.push("/");
    } else if (currentUser.data.user._id !== user.userId) {
      dispatch(setUser(currentUser));
    }
  };

  return (
    <div className="eventInformation">
      {eventInfo.selectedEvent &&
      Object.keys(eventInfo.selectedEvent).length > 0 ? (
        <dl>
          <dt>{eventInfo.selectedEvent.name}</dt>
          <dt>{eventInfo.selectedEvent.description}</dt>
          <dt>{eventInfo.selectedEvent.location.address}</dt>
          <dt>{eventInfo.selectedEvent.creator.username}</dt>
          <dt>
            <h3>Participants</h3>
          </dt>
          {eventInfo.selectedEvent.participants.length > 0
            ? eventInfo.selectedEvent.participants.map((participant) => {
                return <dd key={participant._id}>{participant.username}</dd>;
              })
            : ""}
        </dl>
      ) : (
        <h1>No Event Selected</h1>
      )}
    </div>
  );
}

export default EventInformation;
