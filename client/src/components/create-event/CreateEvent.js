import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut, setUser } from "../../store/actions";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function CreateEvent() {
  const form = useRef(null);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    authenticateCurrentUser();
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
    };

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

      if (response && response.data.response === true) {
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
