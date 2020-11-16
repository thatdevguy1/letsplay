import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut, setUser } from "../../store/actions";
import axios from "axios";
import Events from "./events/Events";

function Dashboard() {
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
    } else {
      dispatch(setUser(currentUser));
    }
  };

  return (
    <div>
      <Events />
    </div>
  );
}

export default Dashboard;
