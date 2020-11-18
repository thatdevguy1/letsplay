import auth from "./auth";
import eventsInfo from "./events";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  user: auth,
  eventsInfo,
});

export default rootReducers;
