import React, { Component,state, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TodoItem from './TodoItem';
import { render } from '@testing-library/react';

class Todos extends Component {
    render(props){
    return this.props.tados.map((todo)=>(
         <TodoItem todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
  ));
}
}

Todos.propTypes ={
  todo: PropTypes.array.isRequired
}

export default Todos;
