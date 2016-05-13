/**
 * Created by xmityaz on 13.05.16.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from './store';
import App from './views/App/App.jsx';
import Home from './views/Home/Home.jsx';
import About from './views/About/About.jsx';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
      </Route>
    </Router>
  </Provider>
);
