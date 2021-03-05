import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, toggleStatus } from '../../actions/todo_actions';

const mapStateToProps = state => (
  {
    todos: allTodos(state)
  }
);

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todoId => dispatch(removeTodo(todoId)),
  toggleStatus: todoId => dispatch(toggleStatus(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);