import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Films from './Films';
import Film from './Film'
import Main from './Main'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Films} />
      <Route path="films" component={Films} />
      <Route path="films/:filmId" component={Film} />
    </Route>
  </Router>
), document.getElementById('root'))
