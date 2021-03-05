import React from 'react';
import TodoList from './todo_list';

const TodoListItem = (props) => {
  return (
    <div>
      
      <li> {props.todo.title} </li>
      {/* <button onClick={props.removeTodo(props.todo.id)}>Delete</button> */}
    </div>
  )
};

export default TodoListItem;