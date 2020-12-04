import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import HowToReg from "@material-ui/icons/HowToReg";

function Participants({ eventInfo }) {
  return (
    <div>
      <h3>Participants</h3>
      <List component="nav" aria-label="contacts">
        {eventInfo.selectedEvent.participants &&
          eventInfo.selectedEvent.participants.map((participant, indx) => {
            return (
              <div key={indx}>
                <ListItem>
                  <ListItemIcon>
                    <HowToReg />
                  </ListItemIcon>
                  <ListItemText primary={participant} />
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
