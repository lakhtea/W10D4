import React from "react";
import StepListContainer from "../step_list/step_list_container";

const TodoDetailView = (props) => {
  // debugger;
  return (
    <div>
      <p>{props.todo.body}</p>
      <StepListContainer todo_id={props.todo.id} />
    </div>
  );
};

export default TodoDetailView;
