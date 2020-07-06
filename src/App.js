import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/homepage/Homepage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
