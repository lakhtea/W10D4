import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./frontend/store/store";
import Root from "./frontend/components/root";
import { allTodos } from "./frontend/reducers/selectors";
import { fetchTodos } from "./frontend/actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.fetchTodos = fetchTodos;
  window.allTodos = allTodos;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
