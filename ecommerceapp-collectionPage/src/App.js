import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import shopPage from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={shopPage}/>  
    </div>
  );
}

export default App;
