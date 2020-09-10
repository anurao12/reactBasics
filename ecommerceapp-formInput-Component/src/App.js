import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/shop/shop.component';
import './App.css';
import {Header} from './components/header/header.component';
import {SignInandSignUp} from './pages/signIn-signUp/signIn-signUp.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={shopPage}/>  
      <Route path='/contact' component={SignInandSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
