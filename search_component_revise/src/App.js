import React from 'react';
import { CartList } from './components/card-list/cardList.components';
import {Search} from './components/search/search.components'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data=> this.setState({monsters: data}))
  }
  changeHandler = e =>{
    
    
  }

  render(){
    const {monsters, searchField } = this.state;
    const FileteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <Search 
        placeholder='search monster'
        changeHandler={e => this.setState({searchField: e.target.value}, ()=> console.log(this.state))}
        />
        <CartList monsters={FileteredMonsters} />
      </div>
    );
  }
}

export default App;
