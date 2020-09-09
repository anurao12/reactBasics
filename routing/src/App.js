import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

const HomePage = props => {
  console.log(props);            
  //givies an object of(history, location, match)
  // match further gives params, url, path
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={()=>props.history.push('/topics')}>Topic</button>
    </div>
  );
}

const TopicPage = props =>{
console.log(props);
//match.url helps to dynamically generate the url for routing
//without being aware of entire url
  return(
    <div>
      <h1>TopicPage</h1>
      <Link to={`${props.match.url}/13`}>to Topic 13</Link>  
      <Link to={`${props.match.url}/28`}>to Topic 28</Link>
      <Link to={`${props.match.url}/44`}>to Topic 44</Link>

    </div>
  )
}

const TopicDetail = props =>{
  console.log(props);
    return(
      <div>
        <Link to='/topics'>Topic</Link>
        <h1>TopicDetail:  {props.match.params.id}</h1>
      </div>
    )
  }


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/bkohsdfsfg/topics' component={TopicPage} />
        <Route path='/bkohsdfsfg/topics/:id' component={TopicDetail} />
      </Switch>
    </div>

  );
}

export default App;
