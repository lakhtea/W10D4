import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}/>
        <ul>
          {this.props.todos.map((todo, idx) => {
            return (
              <TodoListItem
                key={idx}
                todo={todo}
                removeTodo={this.props.removeTodo}
                receiveTodo={this.props.receiveTodo}
                toggleStatus={this.props.toggleStatus}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
