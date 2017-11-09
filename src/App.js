import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import Start from './components/start/index';

const App = () => (
  <Switch>
    <Route exact path="/" component={Start} />
  </Switch>
);

export default App;
