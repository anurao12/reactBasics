import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      meaningOfLife: 27 + this.props.increment
    }
  }
  
  ChangeHandler = e =>{
    this.setState((prevState, prevProps) => 
    ({meaningOfLife: prevState.meaningOfLife + prevProps.increment}),
       ()=>console.log(this.state))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.meaningOfLife}
          <button 
           onClick={this.ChangeHandler}
          >
            Update State
          </button>
        </header>
      </div>
    );
  }

}

export default App;
