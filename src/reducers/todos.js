/**
 * Created by xmityaz on 22.04.16.
 */

import { handleActions } from 'redux-actions';
import * as types from '../constants/todos';

const initialState = [
  {
    text: 'clean dishes',
    completed: false,
    id: 0
  },
  {
    text: 'move cat from the fridge',
    completed: true,
    id: 1
  }
];

export default handleActions({
  [types.ADD_TODO](state, action) {
    return [
      ...state,
      {
        text: action.payload,
        completed: false,
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      }
    ];
  },

  [types.COMPLETE_TODO](state, action) {
    return state.map(todo => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo;
    })
  },

  [types.REMOVE_TODO](state, action) {
    return state.filter(todo => todo.id !== action.payload)
  },

  [types.CLEAR_COMPLETED_TODO](state) {
    return state.filter(todo => !todo.completed);
  }
}, initialState);
