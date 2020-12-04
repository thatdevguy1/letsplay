import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, getMyEvents } from "../../store/actions";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <h1>LetsPlay!</h1>
      </Link>
      <div className="searchBar"> </div>
      <div className="userNav">
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
