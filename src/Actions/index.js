import {API_BASE_URL} from '../config';

const GET_TODOS = 'GET_TODOS';
export function getTodos(data) {
  return {
    type: GET_TODOS,
    data
  };
}


export const saveTodo = (formData) => {
    return dispatch => {
      fetch(`${API_BASE_URL}/createTodo`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'/*, 
           'Authorization' : `Bearer ${authToken}`*/
        },
        body: JSON.stringify({
          formData
        })
      })
      .then((response) => response.json())
      .then((todos) => {
        dispatch(getTodos(todos));
      })
      .catch(err => console.log(err))
    }
  }