import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

const TodoList = (props) => {
  return (
    <div>
      <TodoForm receiveTodo={props.receiveTodo} />
      <ul>
        {props.todos.map((todo, idx) => {
          // debugger
          return <TodoListItem
            key={idx}
            todo={todo}
            removeTodo={props.removeTodo}
            receiveTodo={props.receiveTodo}
            toggleStatus={props.toggleStatus} />
        })}
      </ul>
    </div>
  )
};

export default TodoList;