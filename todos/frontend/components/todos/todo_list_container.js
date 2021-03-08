import { connect } from "react-redux";
import TodoList from "./todo_list";
import { allTodos } from "../../reducers/selectors";
import {
  createTodo,
  fetchTodos,
  receiveTodo,
  removeTodo,
  toggleStatus,
} from "../../actions/todo_actions";
import { receiveErrors, clearErrors } from "../../actions/error_actions";

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  toggleStatus: (todoId) => dispatch(toggleStatus(todoId)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
