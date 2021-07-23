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
import SportsBaseballOutlinedIcon from "@material-ui/icons/SportsBaseballOutlined";
import SportsSoccerOutlinedIcon from "@material-ui/icons/SportsSoccerOutlined";
import SportsFootballOutlinedIcon from "@material-ui/icons/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@material-ui/icons/SportsBasketballOutlined";
import SportsCricketOutlinedIcon from "@material-ui/icons/SportsCricketOutlined";
import SportsHockeyOutlinedIcon from "@material-ui/icons/SportsHockeyOutlined";
import SportsRugbyOutlinedIcon from "@material-ui/icons/SportsRugbyOutlined";
import SportsVolleyballOutlinedIcon from "@material-ui/icons/SportsVolleyballOutlined";
import SportsGolfOutlinedIcon from "@material-ui/icons/SportsGolfOutlined";
import SportsHandballOutlinedIcon from "@material-ui/icons/SportsHandballOutlined";

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
    switch (props.eventData.type) {
      case "Soccer":
        return <SportsSoccerOutlinedIcon />;
      case "Hockey":
        return <SportsHockeyOutlinedIcon />;
      case "Baseball":
        return <SportsBaseballOutlinedIcon />;
      case "Football":
        return <SportsFootballOutlinedIcon />;
      case "Basketball":
        return <SportsBasketballOutlinedIcon />;
      case "Cricket":
        return <SportsCricketOutlinedIcon />;
      case "Rugby":
        return <SportsRugbyOutlinedIcon />;
      case "Volleyball":
        return <SportsVolleyballOutlinedIcon />;
      case "Golf":
        return <SportsGolfOutlinedIcon />;
      case "Handball":
        return <SportsHandballOutlinedIcon />;
      default:
        return <ImageIcon />;
    }
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
