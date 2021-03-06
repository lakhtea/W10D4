import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
// import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";

// const mapStateToProps = (state) => ({
//   todos: allTodos(state),
// });

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
