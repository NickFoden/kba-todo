import uuid from 'uuid/v4';

import {CREATE_TODO} from '../Actions/index'

export default (state = [], action) => {
  switch (action.type){
    case CREATE_TODO:
      return [
        ...state,
        {
          id:uuid(),
          text: action.text,
          completed: false,
        }
      ];
  default:
    return state;
  }
}


// const initialState = {
//     data: []
//   }

//   const todos = (state = initialState, action) => {
//     switch(action.type) {
//       case 'GET_TODOS':
//         return {
//           ...state,
//           data: action.data
//         }
//       default:
//         return state
//     }
//   }

//   export default todos