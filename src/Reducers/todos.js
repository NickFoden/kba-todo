import uuid from 'uuid/v4';

import {
  COMPLETED_TODO,
  CREATE_TODO,
  DELETED_TODO,
  DELETED_ALL_COMPLETED_TODO,
} from '../Actions/todos';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETED_TODO:
      return state.map(todo =>
        (todo.id === action.id
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : todo));
    case DELETED_TODO:
      return state.filter(todo => todo.id !== action.id);
    case DELETED_ALL_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
