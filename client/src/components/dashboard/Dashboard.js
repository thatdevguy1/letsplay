import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyEvents } from "../../store/actions";
import Events from "./events/Events";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "./Dashboard.scss";
import Map from "../map/Map";
import { toast } from "react-toastify";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.error.light,
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function Dashboard() {
  const dispatch = useDispatch();
  const eventToggle = useSelector((state) => {
    return state.eventsInfo.toggleMyEvents;
  });
  const history = useHistory();

  useEffect(() => {
    dispatch(getMyEvents(eventToggle));
  }, []);

  const handleChange = (event) => {
    const token = localStorage.getItem("token");
    console.log("antswitch pressed with token value --> ", token);
    //this should be changed to check the dispatch for events and if there are none then display the toast
    token
      ? dispatch(getMyEvents(!eventToggle))
      : toast.warning("You currently don't have any events");
  };

  return (
    <div className="dashboard">
      <div className="switchWrapper">
        <span style={{ fontSize: "12px", padding: "0 10px" }}>My Events</span>
        <AntSwitch
          checked={!eventToggle}
          onChange={handleChange}
          name="publicEvent"
        />
        <span style={{ fontSize: "12px", padding: "0 10px" }}>
          Public Events
        </span>
      </div>
      <div className="list-and-map">
        <Events />
        <div className="map-wrapper">
          <Map type="cluster" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
