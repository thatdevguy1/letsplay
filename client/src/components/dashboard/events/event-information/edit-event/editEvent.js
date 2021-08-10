import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../../../../../store/actions";
import { useHistory } from "react-router-dom";
import "../EventInformation.scss";
import Modal from "../../../../modal/modal";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Map from "../../../../map/Map";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

function EditEvent(props) {
  const eventInfo = useSelector((state) => state.eventsInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  const form = useRef(null);
  const [publicEvent, setPublicEvent] = useState(
    props.eventInfo.selectedEvent.public
  );
  const { createEventLocation } = useSelector((state) => state.eventsInfo);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(moment());
  const [eventName, setEventName] = useState(
    props.eventInfo.selectedEvent.name
  );
  const [eventDescription, setEventDescription] = useState(
    props.eventInfo.selectedEvent.description
  );

  useEffect(() => {
    if (Object.keys(eventInfo.selectedEvent).length === 0) {
      dispatch(getEvent(history.location.search.split("=")[1]));
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleChange = (event) => {
    setPublicEvent(!publicEvent);
  };

  const handleDescription = (event) => {
    setEventDescription(event.target.value);
  };

  const handleName = (event) => {
    setEventName(event.target.value);
  };

  const handleUpdate = async () => {
    //Handle UPDATE
    //Fix startTime default
    const data = {
      id: props.eventInfo.selectedEvent._id,
      name: eventName,
      location: {
        address: props.eventInfo.selectedEvent.location.address,
        latitude: createEventLocation.lat,
        longitude: createEventLocation.lng,
      },
      description: eventDescription,
      startTime: selectedTime.format("LT"),
      public: publicEvent,
    };

    var config = {
      method: "put",
      data,
      url: process.env.REACT_APP_BASE_API + "/updateEvent",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      let response = await axios(config);
      if (response && response.data.response === true) {
        dispatch(getEvent(response.data._doc._id));
        props.toggleEditMode();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    props.toggleEditMode();
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
    <>
      {props.eventInfo.selectedEvent &&
      Object.keys(props.eventInfo.selectedEvent).length > 0 ? (
        <div className="body-container">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <div>
              <TextField
                required
                id="eventName"
                name="eventName"
                label="Event Name"
                value={eventName}
                onChange={handleName}
                fullWidth
                autoComplete="given-name"
              />
            </div>

            <TextField
              required
              id="description"
              name="description"
              label="Event Description"
              value={eventDescription}
              onChange={handleDescription}
              fullWidth
            />
            {
              //props.eventInfo.selectedEvent.description
            }

            <div className="time-public-wrapper">
              <div className="time-wrapper">
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
              </div>
              <div className="public-wrapper">
                <span>Private</span>
                <AntSwitch
                  checked={publicEvent}
                  onChange={handleChange}
                  name="publicEvent"
                />
                {
                  //props.eventInfo.selectedEvent.public
                }
                <span>Public</span>
              </div>
            </div>
            <div className="map-wrapper">
              <Map type="editLocation" />
            </div>
            <div className="button-wrapper">
              <div>
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleCancel}>Cancel</Button>
              </div>
              <Modal eventId={props.eventInfo.selectedEvent._id}>JOIN</Modal>
            </div>
          </MuiPickersUtilsProvider>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EditEvent;
