// import { API_BASE_URL } from '../config';

export const COMPLETED_TODO = 'COMPLETED_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETED_TODO = 'DELETED_TODO';
export const DELETED_ALL_COMPLETED_TODO = 'DELETED_ALL_COMPLETED_TODO';

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id,
  };
}

export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text,
  };
}

export function deletedTodo(id) {
  return {
    type: DELETED_TODO,
    id,
  };
}

export function deletedAllCompletedTodo() {
  return {
    type: DELETED_ALL_COMPLETED_TODO,
  };
}

// const GET_TODOS = 'GET_TODOS';
// export function getTodos(data) {
//   return {
//     type: GET_TODOS,
//     data,
//   };
// }

// export const saveTodo = formData => (dispatch) => {
//   fetch(`${API_BASE_URL}/createTodo`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json' /* ,
//            'Authorization' : `Bearer ${authToken}` */,
//     },
//     body: JSON.stringify({
//       formData,
//     }),
//   })
//     .then(response => response.json())
//     .then((todos) => {
//       dispatch(getTodos(todos));
//     })
//     .catch(err => console.log(err));
// };
