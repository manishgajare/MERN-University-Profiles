import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from '../config';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/App';
import AddNewProfile from './components/AddNewProfile';

// ReactDOM.render(
//   <App initialData={window.initialData}/>,
//   document.getElementById('root')
// );


ReactDOM.render((
  <Router>
  <Switch>
    <Route exact path="/" render={props => (
      <App initialData={window.initialData}/>
    )}/>
    <Route path="/AddNewProfile" component={AddNewProfile}/>
  </Switch>
  </Router>
), document.getElementById('root'));
