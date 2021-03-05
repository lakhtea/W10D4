import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TOGGLE_STATUS
} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_TODOS:
      for (let i = 0; i < action.todos.length; i++) {
        newState[action.todos[i].id] = action.todos[i];
      }
      return newState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todoId];
      return nextState;
    case TOGGLE_STATUS:
      if (nextState[action.todoId].done){
        nextState[action.todoId].done = false;
      } else {
        nextState[action.todoId].done = true;
      }
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
