import { connect } from "react-redux";
import { removeStep, receiveStep } from "../../actions/step_actions";
import StepListItem from "./step_list_item";

const mapDispatchToProps = (dispatch) => {
  return {
    removeStep: (step_id) => dispatch(removeStep(step_id)),
    receiveStep: (step) => dispatch(receiveStep(step)),
  };
};

export default connect(null, mapDispatchToProps)(StepListItem);
