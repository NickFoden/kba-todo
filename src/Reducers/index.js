import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
  form: reduxFormReducer
});

export default rootReducer;
