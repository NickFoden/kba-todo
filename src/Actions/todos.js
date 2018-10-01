import store from "../store";
import { firebase } from "../config";
import { snapshotToArray } from "./index";

export const COMPLETED_TODO = "COMPLETED_TODO";
export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id
  };
}

export const CREATE_TODO = "CREATE_TODO";
export function createTheTodo(todo) {
  return {
    type: CREATE_TODO,
    todo
  };
}

export const DELETED_TODO = "DELETED_TODO";
export function deletedTodo(id) {
  return {
    type: DELETED_TODO,
    id
  };
}

export const DELETED_ALL_COMPLETED_TODO = "DELETED_ALL_COMPLETED_TODO";
export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO
  };
}

export const SET_CURRENT_ALL_TODOS = "SET_CURRENT_ALL_TODOS";
export const setCurrentAllTodosProps = allTodos => ({
  type: SET_CURRENT_ALL_TODOS,
  allTodos
});

export const getAllTodos = () => {
  firebase
    .database()
    .ref("todos")
    // .orderByChild("time")
    .on("value", function(snapshot) {
      const finalTodos = snapshotToArray(snapshot);
      store.dispatch(setCurrentAllTodosProps(finalTodos.reverse()));
    });
};

export const createATodo = (todo, userId, urgency) => {
  const todoRef = firebase.database().ref("todos");
  let newTodoKey = todoRef.push().key;
  let NewTodo = {
    todo,
    userId,
    urgency,
    timeAdded: Date.now(),
    issueUid: newTodoKey
  };
  todoRef.child(newTodoKey).update(NewTodo);
  // store.dispatch(createTheTodo(NewTodo));
  window.alert(`Todo has been successfully uploaded...`);
};

// completedTodo,
// createTodo,
// deleteTodo,
// deletedAllCompletedTodo
