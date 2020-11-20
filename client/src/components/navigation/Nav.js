import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, getMyEvents } from "../../store/actions";
import "./Nav.scss";

function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((state) => state.eventsInfo);

  const createEvent = () => {
    history.push("/create-event");
  };

  const toggleMyEvents = () => {
    dispatch(getMyEvents());
  };

  return (
    <div className="navbar">
      <h1>LetsPlay!</h1>
      <div className="searchBar"> </div>
      <div className="userNav">
        <h4>Welcome</h4>
        <button onClick={createEvent}>Create Event</button>
        <button onClick={toggleMyEvents}>
          {events.toggleMyEvents === false ? (
            <span>Show My Events</span>
          ) : (
            <span>Show All Events</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Nav;
