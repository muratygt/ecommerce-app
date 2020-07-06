import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        
      </Switch>
    </div>
  );
}

export default App;
