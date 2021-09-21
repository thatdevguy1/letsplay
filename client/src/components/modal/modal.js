import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { joinEvent } from "../../store/actions";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1000px)": {
      width: 200,
    },
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();
  const participant = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitParticipant = () => {
    if (participant.current.value) {
      const data = {
        participantsName: participant.current.value,
        id: props.eventId,
      };
      dispatch(joinEvent(data));
      props.setJoined(true);

      handleClose();
    } else {
      setError(true);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">What name should we use?</h2>
      <TextField
        error={error}
        id="standard-basic"
        label="username"
        inputRef={participant}
        inputProps={{ maxLength: 15 }}
      />
      <button style={{ marginTop: "20px" }} onClick={submitParticipant}>
        Join Event
      </button>
    </div>
  );

  return (
    <div>
      <button
        className={props.btnStyle}
        type="button"
        onClick={handleOpen}
        disabled={props.disabled}
      >
        {props.children}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
