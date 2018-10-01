import { combineReducers } from "redux";
import todos from "./todos";
import users from "./userReducer";

export default combineReducers({
  todos,
  users
});
