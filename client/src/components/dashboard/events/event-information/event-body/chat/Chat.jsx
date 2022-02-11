import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import socketInit from "../../../../../../utils/socket";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  bubble: {
    margin: "10px auto",
    width: "98%",
  },
});

const Chat = ({ selectedEvent, userInfo }) => {
  const chatBoxRef = useRef();
  const socket = socketInit.getSocket();
  const classes = useStyles();
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => {
      setChatLog((chatLog) => [...chatLog, msg]);
    });
    socket.on("denied", (msg) => {
      toast.warning(msg);
    });

    setChatLog(selectedEvent.messages);
  }, []);

  useEffect(() => {
    chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [chatBoxRef.current, chatLog]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", {
      eventId: selectedEvent._id,
      message,
      user: userInfo,
      time: moment().format("hh:mm A"),
    });
    setMessage("");
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chat">
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={12}>
          <List
            className={`${classes.messageArea} message-list`}
            ref={chatBoxRef}
          >
            {chatLog.map((msg) => {
              return msg.user === userInfo?.userId ? (
                <ListItem className={classes.bubble} key={uuidv4()}>
                  <Grid container>
                    <Grid item xs={10}>
                      <ListItemText align="right" primary={msg.message} />
                    </Grid>
                    <Grid item xs={2}>
                      <ListItemText
                        align="right"
                        primary={msg.name}
                        secondary={msg.time}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              ) : (
                <ListItem className={classes.bubble} key={uuidv4()}>
                  <Grid container>
                    <Grid item xs={2}>
                      <ListItemText
                        align="left"
                        primary={msg.name}
                        secondary={msg.time}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <ListItemText align="left" primary={msg.message} />
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <form onSubmit={handleSendMessage}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                  value={message}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </form>
            </Grid>
            <Grid xs={1} align="right" onClick={handleSendMessage}>
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
