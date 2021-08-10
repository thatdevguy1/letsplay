import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import HowToReg from "@material-ui/icons/HowToReg";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { removeParticipant } from "../../../../../store/actions";

function Participants({ eventInfo }) {
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    setId(cookieValue);
  }, []);

  function removeUser(e) {
    console.dir(e.currentTarget.getAttribute("data-id"));
    dispatch(
      removeParticipant({
        participantId: e.currentTarget.getAttribute("data-id"),
        selectedEventId: eventInfo.selectedEvent._id,
      })
    );
  }

  return (
    <div>
      <h3>Participants</h3>
      <List component="nav" aria-label="contacts">
        {eventInfo.selectedEvent.participants &&
          eventInfo.selectedEvent.participants.map((participant, index) => {
            return (
              <div key={index}>
                <ListItem>
                  <ListItemIcon>
                    <HowToReg />
                  </ListItemIcon>
                  <ListItemText primary={participant.name} />
                  {id.includes(participant.userId) ? (
                    <div
                      className="remove-icon-wrapper"
                      data-id={participant.userId}
                      onClick={removeUser}
                    >
                      <RemoveCircleOutlineIcon />
                    </div>
                  ) : null}
                </ListItem>
                <Divider />
              </div>
            );
          })}
      </List>
    </div>
  );
}

export default Participants;
