import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut, setUser } from "../../../store/actions";
import axios from "axios";
import Event from "../events/event/Event";

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    authenticateCurrentUser();
  }, []);

  const authenticateCurrentUser = async () => {
    let currentUser = await axios.get(
      process.env.REACT_APP_BASE_API + "/currentUser"
    );

    if (currentUser.data.response === false) {
      dispatch(signOut());
      history.push("/");
    } else if (currentUser.data.user._id !== user.userId) {
      dispatch(setUser(currentUser));
    }
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h4>Username: {user.username}</h4>
      <h4>Current Events You're In</h4>
      {user.events.map((event) => {
        return <Event key={event._id} eventData={event} />;
      })}
    </div>
  );
}

export default Profile;
