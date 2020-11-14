import auth from "./auth";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  auth: auth,
});

export default rootReducers;
