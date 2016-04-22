/**
 * Created by xmityaz on 12.04.16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from './store';
import App from './views/App/App.jsx';
import Home from './views/Home/Home.jsx';
import About from './views/About/About.jsx';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/">
        <Route component={Home} path="home"/>
        <Route component={About} path="about" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
