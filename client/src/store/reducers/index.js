import auth from "./auth";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  user: auth,
});

export default rootReducers;
