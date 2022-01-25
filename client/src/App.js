import React from "react";
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

socket.init();

function App() {
  axios.defaults.withCredentials = true;

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
