import React from "react";
import TodoList from "./todo_list";
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail() {
    this.setState({ detail: !this.state.detail });
  }
  render() {
    let buttonStatus = "Done";
    if (this.props.todo.done) {
      buttonStatus = "Undo";
    } else {
      buttonStatus = "Done";
    }
    let details;
    if (this.state.detail) {
      details = <TodoDetailViewContainer todo={this.props.todo} />;
    }

    return (
      <div>
        <li onClick={this.toggleDetail}> {this.props.todo.title} </li>
        <button onClick={() => this.props.toggleStatus(this.props.todo.id)}>
          {buttonStatus}
        </button>

        {details}
        {/* <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button> */}
      </div>
    );
  }
}

export default TodoListItem;
