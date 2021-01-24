import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectEvent } from "../../../../store/actions";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { Divider } from "@material-ui/core";

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

  return (
    <ListItem
      style={
        props.selected
          ? { border: "solid 3px #c5ffc5", background: "#daffda" }
          : null
      }
      onClick={makeSelectedEvent}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
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
