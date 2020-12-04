import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyEvents } from "../../store/actions";
import axios from "axios";
import Events from "./events/Events";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import "./Dashboard.scss";

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
  const history = useHistory();
  const [publicEvent, setPublicEvent] = useState(true);

  const handleChange = (event) => {
    setPublicEvent(!publicEvent);
    dispatch(getMyEvents());
  };

  return (
    <div>
      <div className="switchWrapper">
        <span style={{ fontSize: "12px", padding: "0 10px" }}>My Events</span>
        <AntSwitch
          checked={publicEvent}
          onChange={handleChange}
          name="publicEvent"
        />
        <span style={{ fontSize: "12px", padding: "0 10px" }}>All Events</span>
      </div>
      <Events />
    </div>
  );
}

export default Dashboard;
