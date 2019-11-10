import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import http from './services/httpService'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

import Movies from './components/movies';
import NavBar from './components/navbar'
import Counters from './components/counters';
import Home from './components/home';
import NotFound from './components/notFound';

class App extends React.Component {

state = {
  counters: [
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4},
  ],
  tags: ['JS/TS', 'Angular', 'React', 'Node/Express', 'MongoDB', 'GoLang', 'Python'],
  posts: []
};
constructor(props){
  super(props);
  console.log('App- constructor', this.props);
}

async componentDidMount(){
  const {data: posts} = await http.get("http://jsonplaceholder.typicode.com/posts");
  this.setState({posts});
}

componentDidUpdate (){
  console.log('App- Updated');
}

handleIncrement = (counter)=> {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters});
}

handleDecrement = (counter)=> {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
}

handleDelete= (id)=> {
  const counters = this.state.counters.filter(c=> c.id !== id);
  this.setState({counters: counters});
}

renderTags(){
  if(this.state.tags.length > 0)
      return <ul> {this.state.tags.map(tag=> <li key={tag}> {tag} </li> ) } </ul>;
  return <p>There are no Tags!!!</p>
}

handleReset= ()=> {
  const counters = this.state.counters.map(c=> {
      c.value = 0;
      return c;
  });
  this.setState({counters});
}

render() {
  return (
    <React.Fragment>
    <NavBar 
    totalCounters= {this.state.counters.filter(c=> c.value > 0).length }/>
    <div className="nishRoutes">
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
    <main className="container">
    {
      <Counters
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onInc={this.handleIncrement}
        onDec={this.handleDecrement}
        onReset={this.handleReset} >
      </Counters>
    }
    {this.renderTags()}
    {this.state.tags.length === 0 && 'Create new Tags!!!'}
    </main>
    </React.Fragment>
  );
  }
}
export default App;
