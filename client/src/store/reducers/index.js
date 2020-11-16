import auth from "./auth";
import events from "./events";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  user: auth,
  events,
});

export default rootReducers;
