import { combineReducers } from 'redux';
import todos from './todos';
// import userReducer from './auth';
// import authReducer from './auth';

const rootReducer = combineReducers({
    todos,
})

export default rootReducer