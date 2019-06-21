import course from "./course";
import author from "./author";
import { combineReducers } from "redux";

// root reducer
export default combineReducers({
  author,
  course
});
