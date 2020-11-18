import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/dashboard/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";
import CreateEvent from "./components/create-event/CreateEvent";
import EventInformation from "./components/dashboard/events/event-information/EventInformation";
import Nav from "./components/navigation/Nav";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
          <Route path="/event-information">
            <EventInformation />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
