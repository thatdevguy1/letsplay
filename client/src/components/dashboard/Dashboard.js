import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut, setUser } from "../../store/actions";
import axios from "axios";
import Events from "./events/Events";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);

  return (
    <div>
      <Events />
    </div>
  );
}

export default Dashboard;
