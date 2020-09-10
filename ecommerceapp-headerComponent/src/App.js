import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/shop/shop.component';
import './App.css';
import {Header} from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={shopPage}/>  
      </Switch>
    </div>
  );
}

export default App;
