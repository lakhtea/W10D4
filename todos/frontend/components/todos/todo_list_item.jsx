import React from 'react';
import TodoList from './todo_list';

const TodoListItem = (props) => {
  let buttonStatus= "Done";
  if (props.todo.done) {
    buttonStatus = "Undo";
  } else {
    buttonStatus = "Done";
  }

  return (
    <div>
      <li> {props.todo.title} </li>
      <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button>
      <button onClick={() => props.toggleStatus(props.todo.id)}>{buttonStatus}</button>
    </div>
  )
};



export default TodoListItem;

