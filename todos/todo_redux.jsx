import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import {
  receiveTodos,
  receiveTodo,
  removeTodo,
} from "./frontend/actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  ReactDOM.render(<h1>Todos App</h1>, root);
});
