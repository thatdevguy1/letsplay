import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEvents, findAndSetLatLng } from "../../store/actions";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Map from "../map/Map";
import LinearProgress from "@material-ui/core/LinearProgress";

//import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./CreateEvent.scss";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { toast } from "react-toastify";

moment().format();

function CreateEvent() {
  const form = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [publicEvent, setPublicEvent] = useState(true);
  const { createEventLocation } = useSelector((state) => state.eventsInfo);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const [address, setAddress] = useState(createEventLocation.address);
  const [loading, setLoading] = useState(true);
  const [formError, setFormError] = useState({
    eventNameError: false,
    sportNameError: false,
    descriptionError: false,
  });

  useEffect(() => {
    setAddress(createEventLocation.address);
    setLoading(false);
  }, [createEventLocation]);

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressToLatLng = (e) => {
    setLoading(true);
    dispatch(findAndSetLatLng(address));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleChange = (event) => {
    setPublicEvent(!publicEvent);
  };

  const submitCreateForm = async (e) => {
    e.preventDefault();

    if (
      form.current.eventName.value &&
      form.current.sportName.value &&
      form.current.description.value
    ) {
      const data = {
        name: form.current.eventName.value,
        type: form.current.sportName.value,
        icon: `Sports${form.current.sportName.value}OutlinedIcon`,
        location: {
          address: createEventLocation.address,
          latitude: createEventLocation.lat,
          longitude: createEventLocation.lng,
        },
        description: form.current.description.value,
        startTime: selectedTime.format("LT"),
        date: selectedDate,
        public: publicEvent,
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
          dispatch(getEvents());
          toast.success("Event has been created");
          history.push("/");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong. Please try again later");
      }
    } else {
      setFormError({
        eventNameError: true,
        sportNameError: true,
        descriptionError: true,
      });
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
      color: theme.palette.error.light,
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.primary.main,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.common.white,
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
    <div className="create-event">
      <form ref={form}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Typography
            variant="h4"
            style={{ margin: "0 0 40px 0" }}
            gutterBottom
          >
            Create Event
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
                id="eventName"
                name="eventName"
                error={formError.eventNameError}
                label="Event Name"
                fullWidth
                autoComplete="given-name"
                onChange={(e) => {
                  if (e.target.value) {
                    setFormError({ ...formError, eventNameError: false });
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value) {
                    setFormError({ ...formError, eventNameError: false });
                  } else {
                    setFormError({ ...formError, eventNameError: true });
                  }
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="MM/DD/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Start Time"
                value={selectedTime}
                onChange={handleTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
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
                value={address}
                onChange={updateAddress}
                onBlur={handleAddressToLatLng}
              />
              {loading ? <LinearProgress color="primary" /> : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                error={formError.descriptionError}
                label="Event Description"
                fullWidth
                multiline
                onChange={(e) => {
                  if (e.target.value) {
                    setFormError({ ...formError, descriptionError: false });
                  }
                }}
                onBlur={(e) => {
                  if (e.target.value) {
                    setFormError({ ...formError, descriptionError: false });
                  } else {
                    setFormError({ ...formError, descriptionError: true });
                  }
                }}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <Button
          variant="contained"
          style={{
            margin: "40px 0 0 0",
            backgroundColor: "#3f51b4",
            color: "rgb(240, 240, 240)",
          }}
          onClick={submitCreateForm}
        >
          Create Event
        </Button>
      </form>
      <div className="mapHolder">{<Map type="setLocation" />}</div>
    </div>
  );
}

export default CreateEvent;
