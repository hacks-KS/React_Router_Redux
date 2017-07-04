import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory } from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Add, List} from './containers/container';
import configureStore from './store/store';

//index.htmlの<div id>に関するものの定義(今回は content のみ)

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const appEl = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={List} />
      <Route path="/add" component={Add}/>
    </Router>
  </Provider>,
  appEl
);
