import {
  RECEIVE_STEPS, 
  RECEIVE_STEP, 
  REMOVE_STEP
} from '../actions/step_actions'

const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  }
}

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_STEPS:
      for (let i = 0; i < action.steps.length; i++) {
        newState[action.steps[i].id] = action.steps[i];
      }
      return newState;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.stepId];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;