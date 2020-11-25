import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEvents } from "../../store/actions";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import "./CreateEvent.scss";

function CreateEvent() {
  const form = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [publicEvent, setPublicEvent] = useState(true);

  const handleChange = (event) => {
    setPublicEvent(!publicEvent);
  };

  const submitCreateForm = async (e) => {
    e.preventDefault();

    const data = {
      name: form.current.eventName.value,
      type: form.current.sportName.value,
      location: {
        address: form.current.address.value,
        latitude: form.current.lat.value,
        longitude: form.current.lon.value,
      },
      description: form.current.description.value,
      startTime: form.current.startTime.value,
      public: publicEvent,
    };

    console.log("data is: ", data);

    var config = {
      method: "post",
      data,
      url: process.env.REACT_APP_BASE_API + "/createEvent",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);
      console.log(response);

      if (response && response.data.response === true) {
        dispatch(getEvents());
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
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

  return (
    <form ref={form}>
      <Typography variant="h6" gutterBottom>
        Create Event
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="eventName"
            name="eventName"
            label="Event Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sport"
            name="sportName"
            label="Sport Name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startTime"
            name="startTime"
            label="Start Time"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Private</Grid>
            <Grid item>
              <AntSwitch
                checked={publicEvent}
                onChange={handleChange}
                name="publicEvent"
              />
            </Grid>
            <Grid item>Public</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Event Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lat"
            name="lat"
            label="Latitude"
            fullWidth
            autoComplete="18998783244"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lon"
            name="lon"
            label="Longitude"
            fullWidth
            autoComplete="18998783244"
          />
        </Grid>
      </Grid>
      <button onClick={submitCreateForm}>Create Event</button>
    </form>
  );
}

export default CreateEvent;
