import React from 'react';
import {CardList} from './components/card-list/card-list.components';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=> this.setState({monsters:users}))
  }

  render(){
    const {monsters, searchField} = this.state
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
         <input 
         type='search'
         onChange={ e => this.setState({searchField: e.target.value})}
          />
         <CardList monsters={filteredMonster} />
      </div>
    );
  }

}

export default App;
