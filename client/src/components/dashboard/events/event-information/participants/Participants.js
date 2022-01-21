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
import socketInit from "../../../../../utils/socket";

function Participants({ eventInfo }) {
  const socket = socketInit.getSocket();
  const [id, setId] = useState("");
  const [participants, setParticipants] = useState(
    eventInfo.selectedEvent.participants
  );
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("update participants", (data) => {
      setParticipants(data);
    });
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
        {participants &&
          participants.map((participant, index) => {
            return (
              <div key={index}>
                <ListItem style={{ backgroundColor: "white" }}>
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
              </div>
            );
          })}
      </List>
    </div>
  );
}

export default Participants;
