import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import './App.css';

const HatsPage =()=>(
  <h1>
    Hatspages
  </h1>
)

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/>  
    </div>
  );
}

export default App;
