const initialState = {
  currentTodosProps: []
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_ALL_TODOS": {
      return {
        ...state,
        currentTodosProps: [...action.allTodos]
      };
    }
    case "CREATE_TODO": {
      return {
        ...state,
        currentTodosProps: [...state.currentTodosProps, action.todo]
      };
    }
    default:
      return state;
  }
}
