import { connect } from "react-redux";
import StepList from "./step_list";
import { stepsByTodoId } from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    steps: stepsByTodoId(state, ownProps.todo_id),
    todo_id: ownProps.todo_id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
