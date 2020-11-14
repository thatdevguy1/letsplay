import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../store/actions";
import axios from "axios";

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
    let currentUser = await axios.get("http://localhost:8080/api/currentUser");

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
      <h1>Welcome to the Dashboard {user ? user.username : ""}</h1>
      <h2>Your ID is {user ? user.userId : ""}</h2>
    </div>
  );
}

export default Dashboard;
