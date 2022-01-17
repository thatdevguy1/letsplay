import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectEvent } from "../../../../store/actions";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

function Event(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const eventInfo = (eventData) => {
    dispatch(selectEvent(eventData));
    history.push(`/event-information?id=${eventData._id}`);
  };

  const makeSelectedEvent = () => {
    dispatch(selectEvent(props.eventData));
  };

  const getIcon = () => {
    return <ImageIcon />;
  };

  return (
    <ListItem
      style={props.selected ? { borderLeft: "solid 3px #3f51b4" } : null}
      onClick={makeSelectedEvent}
    >
      <input type="hidden" data-id={props.eventData._id} />
      <ListItemAvatar>
        <Avatar>{getIcon()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.eventData.name}
        secondary={props.eventData.description}
        style={{
          maxHeight: "66px",
          overflow: "hidden",
          width: "70%",
          paddingRight: "20px",
        }}
      />
      <Button
        size="small"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          eventInfo(props.eventData);
        }}
      >
        Learn More
      </Button>
    </ListItem>
  );
}

export default Event;
