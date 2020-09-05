import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      monsters:[
        {
          name: 'anu',
          id: 1
        },
        {
          name: 'dhanu',
          id: 2
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(monster =>(
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
