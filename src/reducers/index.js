/**
 * Created by xmityaz on 12.04.16.
 */

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import todos from './todos';

export default combineReducers({
  routing,
  todos
});
