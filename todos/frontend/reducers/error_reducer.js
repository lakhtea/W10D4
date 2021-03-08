const initialState = [];
import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const errorReducer = (state = initialState, action) => {
  const newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      for (let i = 0; i < action.errors.length; i++) {
        newState.push(action.errors[i]);
      }
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default errorReducer;
