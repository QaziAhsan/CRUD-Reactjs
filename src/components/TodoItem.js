import React, { Component,state, useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class TodoItem extends Component {
  getStyle = () => {
    return{
      background: '#f4f4f4',
      fontSize: '10px',
      padding: '5px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'

    };
  }

    render(props){
    const {id, title } = this.props.todo;
    return(
       <div style={this.getStyle()}>
         <h1>
           <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
           {title}
           </h1>
           <button style={btnStyle} onClick= {this.props.delTodo.bind(this, id)}>x</button>
       </div>
  );
}
}

TodoItem.propTypes ={
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background : '#ff0000',
  color : '#fff',
  border : 'none',
  padding : '5px 8px',
  cursor : 'pointer', 
  float : 'right'
}

export default TodoItem;
