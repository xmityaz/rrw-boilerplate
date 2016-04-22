/**
 * Created by xmityaz on 22.04.16.
 */

import { createAction } from 'redux-actions';
import * as types from '../constants/todos';

export const addTodo = createAction(types.ADD_TODO);
export const completeTodo = createAction(types.COMPLETE_TODO);
export const removeTodo = createAction(types.REMOVE_TODO);
export const clearCompleted = createAction(types.CLEAR_COMPLETED_TODO, () => true);
