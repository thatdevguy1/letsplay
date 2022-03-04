import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const user = useSelector((state) => state.user);
  const [participants, setParticipants] = useState(
    eventInfo.selectedEvent.participants
  );
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("update participants", (data) => {
      setParticipants(data);
    });

    return () => {
      socket.off("update participants");
    };
  }, []);

  function removeUser(e, name) {
    dispatch(
      removeParticipant({
        participantId: e.currentTarget.getAttribute("data-id"),
        selectedEventId: eventInfo.selectedEvent._id,
        name,
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
                  {user.id.includes(participant.userId) ||
                  user.id === eventInfo.selectedEvent.creator ? (
                    <div
                      className="remove-icon-wrapper"
                      data-id={participant.userId}
                      onClick={(e) => {
                        removeUser(e, participant.name);
                      }}
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
