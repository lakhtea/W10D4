import * as APIUtil from "../util/todo_api_util";

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId,
});

export const toggleStatus = (todoId) => ({
  type: TOGGLE_STATUS,
  todoId,
});

export const fetchTodos = () => (dispatch) =>
  APIUtil.fetchTodos().then((todos) => dispatch(receiveTodos(todos)));
