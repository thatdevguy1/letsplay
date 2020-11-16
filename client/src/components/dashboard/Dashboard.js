import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../store/actions";
import axios from "axios";
import Events from "./events/Events";

function Dashboard() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.authenticated === true) {
      authenticateCurrentUser();
    } else {
      dispatch(signOut());
      history.push("/");
    }
  });

  const authenticateCurrentUser = async () => {
    let currentUser = await axios.get(
      process.env.REACT_APP_BASE_API + "/currentUser"
    );

    console.log(currentUser);
    if (
      user.userId != currentUser.data._id ||
      user.username != currentUser.data.username
    ) {
      dispatch(signOut());
      history.push("/");
    }
  };

  return (
    <div>
      <Events />
    </div>
  );
}

export default Dashboard;
