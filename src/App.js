import React, { Component,state, useState } from 'react';

import Todos from './components/Todos';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
state = {
  todos: [
  {
    id:1, 
    title: 'Take me out',
    completed: false,
  },
  {
    id:2, 
    title: 'dinner',
    completed: true,
  },
  {
    id:3, 
    title: 'Lunch',
    completed: false,
  },

  ]
}
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo =>{ 
    if(todo.id == id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}

delTodo = (id) =>  {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

render(){
  return (
    <div className="app">
        <Header/>
        <AddTodo/>
        <Todos tados={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
    </div>
  )
  }
}

export default App;
