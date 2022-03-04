import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Profile from "./components/dashboard/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import CreateEvent from "./components/create-event/CreateEvent";
import EventInformation from "./components/dashboard/events/event-information/EventInformation";
import Nav from "./components/navigation/Nav";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socket from "./utils/socket";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/actions";

socket.init();

function App() {
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userDoc = JSON.parse(atob(token.split(".")[1]));
      console.log(userDoc);
      if (Date.now() >= userDoc.exp * 1000) {
        localStorage.removeItem("token");
      } else {
        dispatch(setUser(userDoc.user));
      }
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
          <Route path="/event-information">
            <EventInformation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
