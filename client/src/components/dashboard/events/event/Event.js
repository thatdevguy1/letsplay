import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { selectEvent } from "../../../../store/actions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "30vw",
    minWidth: 245,
    margin: 10,
  },
});

function Event(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const eventInfo = (eventData) => {
    dispatch(selectEvent(eventData));
    history.push(`/event-information?id=${eventData._id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://pbs.twimg.com/profile_images/531498936218189824/_8_2bNtP_400x400.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.eventData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.eventData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
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
      </CardActions>
    </Card>
  );
}

export default Event;
