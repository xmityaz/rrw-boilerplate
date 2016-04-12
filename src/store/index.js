/**
 * Created by xmityaz on 12.04.16.
 */

import { createStore } from 'redux';
import rootReducer from '../reducers'

export default function configure(initialState) {
  let store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
